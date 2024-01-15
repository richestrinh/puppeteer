import type ProtocolMapping from 'devtools-protocol/types/protocol-mapping.js';

import {CDPSession} from '../api/CDPSession.js';
import type {Connection as CdpConnection} from '../cdp/Connection.js';
import {TargetCloseError, UnsupportedOperation} from '../common/Errors.js';
import {assert} from '../util/assert.js';
import {Deferred} from '../util/Deferred.js';

import type {BidiConnection} from './Connection.js';
import type {BidiFrame} from './Frame.js';

/**
 * @internal
 */
export class BidiCdpSession extends CDPSession {
  static sessions = new Map<string, BidiCdpSession>();

  #frame: BidiFrame;
  #sessionId = Deferred.create<string>();
  #detached = false;

  constructor(frame: BidiFrame, sessionId?: string) {
    super();
    this.#frame = frame;
    if (sessionId !== undefined) {
      this.#sessionId.resolve(sessionId);
    }

    void this.#initialize();
  }

  get #connection(): BidiConnection {
    return this.#frame.browserContext.browser().session
      .connection as BidiConnection;
  }

  get #supported() {
    return this.#frame.browserContext.browser().cdpSupported;
  }

  async #initialize() {
    if (!this.#supported) {
      return;
    }
    if (!this.#sessionId.finished()) {
      const {
        result: {session},
      } = await this.#connection.send('cdp.getSession', {
        context: this.#frame._id,
      });
      assert(session);
      this.#sessionId.resolve(session);
    }

    // SAFETY: We never throw #sessionId.
    BidiCdpSession.sessions.set(this.#sessionId.value() as string, this);
  }

  override connection(): CdpConnection | undefined {
    return undefined;
  }

  override async send<T extends keyof ProtocolMapping.Commands>(
    method: T,
    ...paramArgs: ProtocolMapping.Commands[T]['paramsType']
  ): Promise<ProtocolMapping.Commands[T]['returnType']> {
    if (!this.#supported) {
      throw new UnsupportedOperation(
        'CDP support is required for this feature. The current browser does not support CDP.'
      );
    }
    if (this.#detached) {
      throw new TargetCloseError(
        `Protocol error (${method}): Session closed. Most likely the page has been closed.`
      );
    }
    const session = await this.#sessionId.valueOrThrow();
    const {result} = await this.#connection.send('cdp.sendCommand', {
      method: method,
      params: paramArgs[0],
      session,
    });
    return result.result;
  }

  override async detach(): Promise<void> {
    if (this.#detached) {
      return;
    }
    this.#detached = true;

    if (this.#supported) {
      await this.send('Target.detachFromTarget', {
        sessionId: this.id(),
      });
    }
  }

  override id(): string {
    const value = this.#sessionId.value();
    return typeof value === 'string' ? value : '';
  }
}
