import * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import type {JSHandle} from '../api/JSHandle.js';
import {Realm} from '../api/Realm.js';
import {LazyArg} from '../common/LazyArg.js';
import {scriptInjector} from '../common/ScriptInjector.js';
import type {TimeoutSettings} from '../common/TimeoutSettings.js';
import type {EvaluateFunc, HandleFor} from '../common/types.js';
import {
  debugError,
  getSourcePuppeteerURLIfAvailable,
  getSourceUrlComment,
  isString,
  PuppeteerURL,
  SOURCE_URL_REGEX,
} from '../common/util.js';
import type PuppeteerUtil from '../injected/injected.js';
import {stringifyFunction} from '../util/Function.js';

import type {Realm as BidiRealmCore} from './core/Realm.js';
import type {WindowRealm} from './core/Realm.js';
import {BidiDeserializer} from './Deserializer.js';
import {BidiElementHandle} from './ElementHandle.js';
import type {BidiFrame} from './Frame.js';
import {BidiJSHandle} from './JSHandle.js';
import {BidiSerializer} from './Serializer.js';
import {createEvaluationError} from './util.js';

export abstract class BidiRealm extends Realm {
  protected realm: BidiRealmCore;

  constructor(realm: BidiRealmCore, timeoutSettings: TimeoutSettings) {
    super(timeoutSettings);
    this.realm = realm;
  }

  protected internalPuppeteerUtil?: Promise<BidiJSHandle<PuppeteerUtil>>;
  get puppeteerUtil(): Promise<BidiJSHandle<PuppeteerUtil>> {
    const promise = Promise.resolve() as Promise<unknown>;
    scriptInjector.inject(script => {
      if (this.internalPuppeteerUtil) {
        void this.internalPuppeteerUtil.then(handle => {
          void handle.dispose();
        });
      }
      this.internalPuppeteerUtil = promise.then(() => {
        return this.evaluateHandle(script) as Promise<
          BidiJSHandle<PuppeteerUtil>
        >;
      });
    }, !this.internalPuppeteerUtil);
    return this.internalPuppeteerUtil as Promise<BidiJSHandle<PuppeteerUtil>>;
  }

  async #evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    returnByValue: true,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  async #evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    returnByValue: false,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
  async #evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    returnByValue: boolean,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>> | Awaited<ReturnType<Func>>> {
    const sourceUrlComment = getSourceUrlComment(
      getSourcePuppeteerURLIfAvailable(pageFunction)?.toString() ??
        PuppeteerURL.INTERNAL_URL
    );

    let responsePromise;
    const resultOwnership = returnByValue
      ? Bidi.Script.ResultOwnership.None
      : Bidi.Script.ResultOwnership.Root;
    const serializationOptions: Bidi.Script.SerializationOptions = returnByValue
      ? {}
      : {
          maxObjectDepth: 0,
          maxDomDepth: 0,
        };
    if (isString(pageFunction)) {
      const expression = SOURCE_URL_REGEX.test(pageFunction)
        ? pageFunction
        : `${pageFunction}\n${sourceUrlComment}\n`;

      responsePromise = this.realm.evaluate(expression, true, {
        resultOwnership,
        userActivation: true,
        serializationOptions,
      });
    } else {
      let functionDeclaration = stringifyFunction(pageFunction);
      functionDeclaration = SOURCE_URL_REGEX.test(functionDeclaration)
        ? functionDeclaration
        : `${functionDeclaration}\n${sourceUrlComment}\n`;
      responsePromise = this.realm.callFunction(functionDeclaration, true, {
        arguments: args.length
          ? await Promise.all(
              args.map(arg => {
                return this.serialize(arg);
              })
            )
          : [],
        resultOwnership,
        userActivation: true,
        serializationOptions,
      });
    }

    const result = await responsePromise;

    if ('type' in result && result.type === 'exception') {
      throw createEvaluationError(result.exceptionDetails);
    }

    return returnByValue
      ? // SAFETY: We use any because the type is too complex to be inferred
        (BidiDeserializer.deserializeLocalValue(result.result) as any)
      : this.createHandle(result.result);
  }

  createHandle(
    result: Bidi.Script.RemoteValue
  ): BidiJSHandle<unknown> | BidiElementHandle<Node> {
    if (
      (result.type === 'node' || result.type === 'window') &&
      this instanceof BidiFrameRealm
    ) {
      return BidiElementHandle.create(result, this);
    }
    return BidiJSHandle.create(result, this);
  }

  async serialize(arg: unknown): Promise<Bidi.Script.LocalValue> {
    if (arg instanceof LazyArg) {
      arg = await arg.get(this);
    }

    if (arg instanceof BidiJSHandle || arg instanceof BidiElementHandle) {
      if (arg.realm !== this) {
        if (
          !(arg.realm instanceof BidiFrameRealm) ||
          !(this instanceof BidiFrameRealm)
        ) {
          throw new Error(
            "Trying to evaluate JSHandle from different global types. Usually this means you're using a handle from a worker in a page or vice versa."
          );
        }
        if (arg.realm.environment !== this.environment) {
          throw new Error(
            "Trying to evaluate JSHandle from different frames. Usually this means you're using a handle from a page on a diffrent page."
          );
        }
      }
      if (arg.disposed) {
        throw new Error('JSHandle is disposed!');
      }
      return arg.remoteValue as Bidi.Script.RemoteReference;
    }

    return BidiSerializer.serializeRemoteValue(arg);
  }

  async destroyHandles(handles: Array<BidiJSHandle<unknown>>): Promise<void> {
    await this.realm
      .disown(
        handles
          .map(({id}) => {
            return id;
          })
          .filter((id): id is string => {
            return id !== undefined;
          })
      )
      .catch((error: any) => {
        // Exceptions might happen in case of a page been navigated or closed.
        // Swallow these since they are harmless and we don't leak anything in this case.
        debugError(error);
      });
  }

  override async evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>> {
    return await this.#evaluate(false, pageFunction, ...args);
  }

  override async evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    return await this.#evaluate(true, pageFunction, ...args);
  }

  override async adoptHandle<T extends JSHandle<Node>>(handle: T): Promise<T> {
    return (await this.evaluateHandle(node => {
      return node;
    }, handle)) as unknown as T;
  }

  override async transferHandle<T extends JSHandle<Node>>(
    handle: T
  ): Promise<T> {
    if (handle.realm === this) {
      return handle;
    }
    const transferredHandle = (await this.evaluateHandle(node => {
      return node;
    }, handle)) as unknown as T;
    await handle.dispose();
    return transferredHandle;
  }
}

export class BidiFrameRealm extends BidiRealm {
  declare readonly realm: WindowRealm;

  readonly #frame: BidiFrame;

  constructor(
    realm: WindowRealm,
    frame: BidiFrame,
    timeoutSettings: TimeoutSettings
  ) {
    super(realm, timeoutSettings);
    this.#frame = frame;

    this.realm.on('destroyed', () => {
      this.internalPuppeteerUtil = undefined;
      this.#frame.clearDocumentHandle();
    });
  }

  get sandbox(): string | undefined {
    return this.realm.sandbox;
  }

  override get environment(): BidiFrame {
    return this.#frame;
  }

  override async adoptBackendNode(
    backendNodeId?: number | undefined
  ): Promise<JSHandle<Node>> {
    const {object} = await this.#frame.client.send('DOM.resolveNode', {
      backendNodeId,
    });
    return BidiElementHandle.create(
      {
        handle: object.objectId,
        type: 'node',
      },
      this
    );
  }
}
