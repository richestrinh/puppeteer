/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import type {Observable} from '../../third_party/rxjs/rxjs.js';
import {
  bufferCount,
  debounceTime,
  filterAsync,
  first,
  firstValueFrom,
  from,
  lastValueFrom,
  map,
  merge,
  mergeMap,
  of,
  raceWith,
  zip,
} from '../../third_party/rxjs/rxjs.js';
import {BrowserEvent} from '../api/Browser.js';
import {BrowserContextEvent} from '../api/BrowserContext.js';
import type {BoundingBox, ElementHandle} from '../api/ElementHandle.js';
import {
  Frame,
  throwIfDetached,
  type GoToOptions,
  type WaitForOptions,
} from '../api/Frame.js';
import type {HTTPRequest} from '../api/HTTPRequest.js';
import type {HTTPResponse} from '../api/HTTPResponse.js';
import type {NewDocumentScriptEvaluation} from '../api/Page.js';
import {
  PageEvent,
  type AwaitablePredicate,
  type ScreenshotOptions,
  type WaitForSelectorOptions,
  type WaitTimeoutOptions,
} from '../api/Page.js';
import {
  ConsoleMessage,
  type ConsoleMessageLocation,
} from '../common/ConsoleMessage.js';
import {UnsupportedOperation} from '../common/Errors.js';
import type {PDFOptions} from '../common/PDFOptions.js';
import type {TimeoutSettings} from '../common/TimeoutSettings.js';
import type {Awaitable, NodeFor} from '../common/types.js';
import {
  debugError,
  evaluationString,
  fromEmitterEvent,
  importFSPromises,
  NETWORK_IDLE_TIME,
  parsePDFOptions,
  timeout,
} from '../common/util.js';
import type {Viewport} from '../common/Viewport.js';

import type {BidiBrowserContext} from './BrowserContext.js';
import {BidiCdpSession} from './CdpSession.js';
import type {BrowsingContext} from './core/BrowsingContext.js';
import {BidiDeserializer} from './Deserializer.js';
import {BidiDialog} from './Dialog.js';
import {BidiElementHandle} from './ElementHandle.js';
import {ExposeableFunction} from './ExposedFunction.js';
import {BidiHTTPRequest, requests} from './HTTPRequest.js';
import type {BidiHTTPResponse} from './HTTPResponse.js';
import {BidiJSHandle} from './JSHandle.js';
import type {BidiPage} from './Page.js';
import {BidiFrameRealm} from './Realm.js';

const frames = new WeakMap<BrowsingContext, BidiFrame>();

/**
 * Puppeteer's Frame class could be viewed as a BiDi BrowsingContext implementation
 * @internal
 */
export class BidiFrame extends Frame {
  static from(
    context: BrowsingContext,
    page: BidiPage,
    timeoutSettings: TimeoutSettings
  ): BidiFrame {
    const frame = new BidiFrame(context, page, timeoutSettings);
    frame.#initialize();
    return frame;
  }

  // keep-sorted start
  // TODO: Replace with weak ref.
  readonly #browsingContext: BrowsingContext;
  readonly #page: BidiPage;
  readonly #timeoutSettings: TimeoutSettings;
  readonly destroyed$: Observable<never>;
  override readonly client: BidiCdpSession;
  readonly realms: {default: BidiFrameRealm; internal: BidiFrameRealm};
  // keep-sorted end

  private constructor(
    context: BrowsingContext,
    page: BidiPage,
    timeoutSettings: TimeoutSettings
  ) {
    super();
    frames.set(context, this);

    this.#browsingContext = context;
    this.#page = page;
    this.#timeoutSettings = timeoutSettings;

    this.client = new BidiCdpSession(this);
    this.realms = {
      default: new BidiFrameRealm(
        this.#browsingContext.defaultRealm,
        this,
        this.#timeoutSettings
      ),
      internal: new BidiFrameRealm(
        this.#browsingContext.createWindowRealm(
          `__puppeteer_internal_${Math.ceil(Math.random() * 10000)}`
        ),
        this,
        this.#timeoutSettings
      ),
    };
    this.destroyed$ = fromEmitterEvent(this.#browsingContext, 'destroyed').pipe(
      map(() => {
        throw new Error('Frame detached.');
      })
    );
  }

  get browserContext(): BidiBrowserContext {
    return this.#page.browserContext();
  }

  override get detached(): boolean {
    return this.#browsingContext.disposed;
  }

  override get _id(): string {
    return this.#browsingContext.id;
  }

  #initialize() {
    this.#browsingContext.on('browsingcontext', ({browsingContext}) => {
      const frame = BidiFrame.from(
        browsingContext,
        this.page(),
        this.#timeoutSettings
      );
      this.page().emit(PageEvent.FrameAttached, frame);
    });
    this.#browsingContext.on('destroyed', () => {
      this.page().emit(PageEvent.FrameDetached, this);
      this.removeAllListeners();
    });

    this.#browsingContext.on('request', ({request}) => {
      const httpRequest = BidiHTTPRequest.create(request, this);
      this.page().emit(PageEvent.Request, httpRequest);

      request.once('success', () => {
        // SAFETY: BidiHTTPRequest will create this before here.
        this.page().emit(PageEvent.Response, httpRequest.response()!);
        this.page().emit(PageEvent.RequestFinished, httpRequest);
      });

      request.once('error', () => {
        this.page().emit(PageEvent.RequestFailed, httpRequest);
      });
    });

    this.#browsingContext.on('navigation', ({navigation}) => {
      const browserContext = this.page().browserContext();
      browserContext.emit(
        BrowserContextEvent.TargetChanged,
        this.page().target()
      );
      browserContext
        .browser()
        .emit(BrowserEvent.TargetChanged, this.page().target());
      navigation.once('fragment', () => {
        this.page().emit(PageEvent.FrameNavigated, this);

        const browserContext = this.page().browserContext();
        browserContext.emit(
          BrowserContextEvent.TargetChanged,
          this.page().target()
        );
        browserContext
          .browser()
          .emit(BrowserEvent.TargetChanged, this.page().target());
      });
    });
    this.#browsingContext.on('load', () => {
      this.page().emit(PageEvent.Load, undefined);
    });
    this.#browsingContext.on('DOMContentLoaded', () => {
      this._hasStartedLoading = true;
      this.page().emit(PageEvent.DOMContentLoaded, undefined);
      this.page().emit(PageEvent.FrameNavigated, this);

      const browserContext = this.page().browserContext();
      browserContext.emit(
        BrowserContextEvent.TargetChanged,
        this.page().target()
      );
      browserContext
        .browser()
        .emit(BrowserEvent.TargetChanged, this.page().target());
    });

    this.#browsingContext.on('userprompt', ({userPrompt}) => {
      this.page().emit(PageEvent.Dialog, BidiDialog.create(userPrompt));
    });

    this.#browsingContext.on('log', ({entry}) => {
      if (this._id !== entry.source.context) {
        return;
      }
      if (isConsoleLogEntry(entry)) {
        const args = entry.args.map(arg => {
          return this.mainRealm().createHandle(arg);
        });

        const text = args
          .reduce((value, arg) => {
            const parsedValue =
              arg instanceof BidiJSHandle && arg.primitive
                ? BidiDeserializer.deserializeLocalValue(arg.remoteValue)
                : arg.toString();
            return `${value} ${parsedValue}`;
          }, '')
          .slice(1);

        this.page().emit(
          PageEvent.Console,
          new ConsoleMessage(
            entry.method as any,
            text,
            args,
            getStackTraceLocations(entry.stackTrace)
          )
        );
      } else if (isJavaScriptLogEntry(entry)) {
        const error = new Error(entry.text ?? '');

        const messageHeight = error.message.split('\n').length;
        const messageLines = error.stack!.split('\n').splice(0, messageHeight);

        const stackLines = [];
        if (entry.stackTrace) {
          for (const frame of entry.stackTrace.callFrames) {
            // Note we need to add `1` because the values are 0-indexed.
            stackLines.push(
              `    at ${frame.functionName || '<anonymous>'} (${frame.url}:${
                frame.lineNumber + 1
              }:${frame.columnNumber + 1})`
            );
            if (stackLines.length >= Error.stackTraceLimit) {
              break;
            }
          }
        }

        error.stack = [...messageLines, ...stackLines].join('\n');
        this.page().emit(PageEvent.PageError, error);
      } else {
        debugError(
          `Unhandled LogEntry with type "${entry.type}", text "${entry.text}" and level "${entry.level}"`
        );
      }
    });
  }

  @throwIfDetached
  async bringToFront(): Promise<void> {
    await this.#browsingContext.activate();
  }

  @throwIfDetached
  async reload(options?: WaitForOptions): Promise<BidiHTTPResponse | null> {
    void this.#browsingContext.reload();
    return await this.waitForNavigation(options);
  }

  @throwIfDetached
  async close(options?: {runBeforeUnload?: boolean}): Promise<void> {
    await this.#browsingContext.close(options?.runBeforeUnload ?? false);
  }

  @throwIfDetached
  async setViewport(viewport: Viewport): Promise<void> {
    await this.#browsingContext.setViewport({
      viewport:
        viewport.width && viewport.height
          ? {
              width: viewport.width,
              height: viewport.height,
            }
          : null,
      devicePixelRatio: viewport.deviceScaleFactor
        ? viewport.deviceScaleFactor
        : null,
    });
  }

  @throwIfDetached
  async pdf(options: PDFOptions = {}): Promise<Buffer> {
    const {path = undefined, timeout: ms = this.#timeoutSettings.timeout()} =
      options;
    const {
      printBackground: background,
      margin,
      landscape,
      width,
      height,
      pageRanges: ranges,
      scale,
      preferCSSPageSize,
    } = parsePDFOptions(options, 'cm');

    const pageRanges = ranges ? ranges.split(', ') : [];
    const data = await firstValueFrom(
      from(
        this.#browsingContext.print({
          background,
          margin,
          orientation: landscape ? 'landscape' : 'portrait',
          page: {
            width,
            height,
          },
          pageRanges,
          scale,
          shrinkToFit: !preferCSSPageSize,
        })
      ).pipe(raceWith(timeout(ms)))
    );

    const buffer = Buffer.from(data, 'base64');
    if (path) {
      const fs = await importFSPromises();
      await fs.writeFile(path, buffer);
    }
    return buffer;
  }

  @throwIfDetached
  async screenshot(options: Readonly<ScreenshotOptions>): Promise<string> {
    const {clip, type, captureBeyondViewport, quality} = options;
    if (options.omitBackground !== undefined && options.omitBackground) {
      throw new UnsupportedOperation(`BiDi does not support 'omitBackground'.`);
    }
    if (options.optimizeForSpeed !== undefined && options.optimizeForSpeed) {
      throw new UnsupportedOperation(
        `BiDi does not support 'optimizeForSpeed'.`
      );
    }
    if (options.fromSurface !== undefined && !options.fromSurface) {
      throw new UnsupportedOperation(`BiDi does not support 'fromSurface'.`);
    }
    if (clip !== undefined && clip.scale !== undefined && clip.scale !== 1) {
      throw new UnsupportedOperation(
        `BiDi does not support 'scale' in 'clip'.`
      );
    }

    let box: BoundingBox | undefined;
    if (clip) {
      if (captureBeyondViewport) {
        box = clip;
      } else {
        // The clip is always with respect to the document coordinates, so we
        // need to convert this to viewport coordinates when we aren't capturing
        // beyond the viewport.
        const [pageLeft, pageTop] = await this.evaluate(() => {
          if (!window.visualViewport) {
            throw new Error('window.visualViewport is not supported.');
          }
          return [
            window.visualViewport.pageLeft,
            window.visualViewport.pageTop,
          ] as const;
        });
        box = {
          ...clip,
          x: clip.x - pageLeft,
          y: clip.y - pageTop,
        };
      }
    }

    return await this.#browsingContext.captureScreenshot({
      origin: captureBeyondViewport ? 'document' : 'viewport',
      format: {
        type: `image/${type}`,
        ...(quality !== undefined ? {quality: quality / 100} : {}),
      },
      ...(box ? {clip: {type: 'box', ...box}} : {}),
    });
  }

  @throwIfDetached
  async focusedFrame(): Promise<BidiFrame> {
    using frame = await this.isolatedRealm().evaluateHandle(() => {
      let frame: HTMLIFrameElement | undefined;
      let win: Window | null = window;
      while (win?.document.activeElement instanceof HTMLIFrameElement) {
        frame = win.document.activeElement;
        win = frame.contentWindow;
      }
      return frame;
    });
    if (!(frame instanceof BidiElementHandle)) {
      return this;
    }
    return await frame.contentFrame();
  }

  #exposedFunctions = new Map<string, ExposeableFunction<never[], unknown>>();
  @throwIfDetached
  async exposeFunction<Args extends unknown[], Ret>(
    name: string,
    apply: (...args: Args) => Awaitable<Ret>
  ): Promise<void> {
    if (this.#exposedFunctions.has(name)) {
      throw new Error(
        `Failed to add page binding with name ${name}: globalThis['${name}'] already exists!`
      );
    }
    const exposeable = new ExposeableFunction(this, name, apply);
    this.#exposedFunctions.set(name, exposeable);
    try {
      await exposeable.expose();
    } catch (error) {
      this.#exposedFunctions.delete(name);
      throw error;
    }
  }

  @throwIfDetached
  waitForRequest$(
    urlOrPredicate: string | AwaitablePredicate<HTTPRequest>,
    options: WaitTimeoutOptions = {}
  ): Observable<HTTPRequest> {
    const {timeout: ms = this.#timeoutSettings.timeout()} = options;

    if (typeof urlOrPredicate === 'string') {
      const url = urlOrPredicate;
      urlOrPredicate = request => {
        return request.url() === url;
      };
    }

    return fromEmitterEvent(this.#browsingContext, 'request')
      .pipe(
        mergeMap(({request}) => {
          return merge(
            of(request),
            fromEmitterEvent(request, 'success'),
            fromEmitterEvent(request, 'error')
          ).pipe(
            map(() => {
              // SAFETY: `#initialize` listeners and the BidiHTTPRequest
              // constructor will ensure this is here.
              return requests.get(request)!;
            })
          );
        }),
        filterAsync(urlOrPredicate)
      )
      .pipe(first(), raceWith(timeout(ms), this.destroyed$));
  }

  @throwIfDetached
  waitForResponse$(
    urlOrPredicate: string | AwaitablePredicate<HTTPResponse>,
    options: WaitTimeoutOptions = {}
  ): Observable<HTTPResponse> {
    const {timeout: ms = this.#timeoutSettings.timeout()} = options;

    if (typeof urlOrPredicate === 'string') {
      const url = urlOrPredicate;
      urlOrPredicate = request => {
        return request.url() === url;
      };
    }

    return fromEmitterEvent(this.#browsingContext, 'request')
      .pipe(
        mergeMap(({request}) => {
          return fromEmitterEvent(request, 'success').pipe(
            map(() => {
              // SAFETY: `#initialize` listeners and the BidiHTTPRequest
              // constructor will ensure this is here.
              return requests.get(request)!.response()!;
            })
          );
        }),
        filterAsync(urlOrPredicate)
      )
      .pipe(first(), raceWith(timeout(ms), this.destroyed$));
  }

  @throwIfDetached
  waitForNetworkIdle$(
    options: {idleTime?: number; timeout?: number; count?: number} = {}
  ): Observable<void> {
    const {
      idleTime = NETWORK_IDLE_TIME,
      timeout: ms = this.#timeoutSettings.timeout(),
      count = 0,
    } = options;

    if (count === Infinity) {
      return of(undefined);
    }

    return merge(
      of(undefined),
      fromEmitterEvent(this.#browsingContext, 'request').pipe(
        mergeMap(({request}) => {
          return merge(
            of(request),
            fromEmitterEvent(request, 'success'),
            fromEmitterEvent(request, 'error'),
            fromEmitterEvent(request, 'redirect')
          );
        }),
        bufferCount(count + 1, 1)
      )
    ).pipe(
      debounceTime(idleTime),
      map(() => {}),
      first(),
      raceWith(timeout(ms), this.destroyed$)
    );
  }

  @throwIfDetached
  waitForLoad$(options: WaitForOptions = {}): Observable<void> {
    let {waitUntil = 'load'} = options;
    const {timeout: ms = this.#timeoutSettings.navigationTimeout()} = options;

    if (!Array.isArray(waitUntil)) {
      waitUntil = [waitUntil];
    }

    const events = new Set<'load' | 'DOMContentLoaded'>();
    for (const lifecycleEvent of waitUntil) {
      switch (lifecycleEvent) {
        case 'load': {
          events.add('load');
          break;
        }
        case 'domcontentloaded': {
          events.add('DOMContentLoaded');
          break;
        }
      }
    }

    if (events.size === 0) {
      return of(undefined);
    }

    return zip(
      ...[...events].map(event => {
        return fromEmitterEvent(this.#browsingContext, event);
      })
    ).pipe(
      map(() => {
        return undefined;
      }),
      first(),
      raceWith(timeout(ms), this.destroyed$)
    );
  }

  @throwIfDetached
  override async waitForNavigation(
    options: WaitForOptions = {}
  ): Promise<BidiHTTPResponse | null> {
    const {timeout: ms = this.#timeoutSettings.navigationTimeout()} = options;

    return await firstValueFrom(
      zip(
        fromEmitterEvent(this.#browsingContext, 'navigation'),
        this.waitForLoad$(options),
        this.waitForNetworkIdle$(getWaitForNetworkIdleOptions(options))
      ).pipe(
        map(([{navigation}]) => {
          const request = navigation.request();
          if (!request) {
            return null;
          }
          // SAFETY: `#initialize` listeners and the BidiHTTPRequest constructor
          // will ensure this is here.
          return requests.get(request)!.response();
        }),
        raceWith(timeout(ms), this.destroyed$)
      )
    );
  }

  @throwIfDetached
  async go(
    delta: number,
    options?: WaitForOptions
  ): Promise<HTTPResponse | null> {
    void this.#browsingContext.traverseHistory(delta);
    return await this.waitForNavigation(options);
  }

  @throwIfDetached
  async evaluateOnNewDocument<
    Params extends unknown[],
    Func extends (...args: Params) => unknown = (...args: Params) => unknown,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<NewDocumentScriptEvaluation> {
    const expression = evaluationExpression(pageFunction, ...args);
    const identifier = await this.#browsingContext.addPreloadScript(expression);
    return {identifier};
  }

  @throwIfDetached
  async removeScriptToEvaluateOnNewDocument(id: string): Promise<void> {
    await this.#browsingContext.removePreloadScript(id);
  }

  override mainRealm(): BidiFrameRealm {
    return this.realms.default;
  }

  override isolatedRealm(): BidiFrameRealm {
    return this.realms.internal;
  }

  override page(): BidiPage {
    return this.#page;
  }

  override isOOPFrame(): never {
    throw new UnsupportedOperation();
  }

  override url(): string {
    return this.#browsingContext.url;
  }

  override parentFrame(): BidiFrame | null {
    return this.#browsingContext.parent
      ? // SAFETY: Created during `constructor` of the parent.
        frames.get(this.#browsingContext.parent)!
      : null;
  }

  override childFrames(): BidiFrame[] {
    return [...this.#browsingContext.children].map(child => {
      // SAFETY: Created in `constructor` of the child
      return frames.get(child)!;
    });
  }

  @throwIfDetached
  override async goto(
    url: string,
    options: GoToOptions = {}
  ): Promise<BidiHTTPResponse | null> {
    void this.#browsingContext.navigate(url);
    return await this.waitForNavigation(options);
  }

  @throwIfDetached
  override async setContent(
    html: string,
    options: WaitForOptions = {}
  ): Promise<void> {
    void this.setFrameContent(html);
    await lastValueFrom(
      zip(
        this.waitForLoad$(options),
        this.waitForNetworkIdle$(getWaitForNetworkIdleOptions(options))
      )
    );
  }

  override waitForDevicePrompt(): never {
    throw new UnsupportedOperation();
  }

  @throwIfDetached
  override async waitForSelector<Selector extends string>(
    selector: Selector,
    options?: WaitForSelectorOptions
  ): Promise<ElementHandle<NodeFor<Selector>> | null> {
    if (selector.startsWith('aria')) {
      throw new UnsupportedOperation(
        'ARIA selector is not supported for BiDi!'
      );
    }

    return await super.waitForSelector(selector, options);
  }
}

function isConsoleLogEntry(
  event: Bidi.Log.Entry
): event is Bidi.Log.ConsoleLogEntry {
  return event.type === 'console';
}

function isJavaScriptLogEntry(
  event: Bidi.Log.Entry
): event is Bidi.Log.JavascriptLogEntry {
  return event.type === 'javascript';
}

function getStackTraceLocations(
  stackTrace?: Bidi.Script.StackTrace
): ConsoleMessageLocation[] {
  const stackTraceLocations: ConsoleMessageLocation[] = [];
  if (stackTrace) {
    for (const callFrame of stackTrace.callFrames) {
      stackTraceLocations.push({
        url: callFrame.url,
        lineNumber: callFrame.lineNumber,
        columnNumber: callFrame.columnNumber,
      });
    }
  }
  return stackTraceLocations;
}

function evaluationExpression(fun: Function | string, ...args: unknown[]) {
  return `() => {${evaluationString(fun, ...args)}}`;
}

function getWaitForNetworkIdleOptions(options: WaitForOptions) {
  let {waitUntil = 'load'} = options;
  if (!Array.isArray(waitUntil)) {
    waitUntil = [waitUntil];
  }

  let requestCount = Infinity;
  for (const event of waitUntil) {
    switch (event) {
      case 'networkidle0': {
        requestCount = Math.min(0, requestCount);
        break;
      }
      case 'networkidle2': {
        requestCount = Math.min(2, requestCount);
        break;
      }
    }
  }

  return {
    idleTime: 500,
    timeout: options.timeout,
    count: requestCount,
  };
}
