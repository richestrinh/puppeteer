/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {ChildProcess} from 'child_process';

import {
  Browser,
  BrowserEvent,
  type BrowserCloseCallback,
  type BrowserContextOptions,
} from '../api/Browser.js';
import {BrowserContextEvent} from '../api/BrowserContext.js';
import type {Page} from '../api/Page.js';
import type {Target} from '../api/Target.js';
import {UnsupportedOperation} from '../common/Errors.js';
import type {Viewport} from '../common/Viewport.js';

import {BidiBrowserContext} from './BrowserContext.js';
import type {Connection} from './core/Connection.js';
import {Session} from './core/Session.js';
import type {UserContext} from './core/UserContext.js';
import {BidiBrowserTarget} from './Target.js';

/**
 * @internal
 */
export interface BidiBrowserOptions {
  closeCallback?: BrowserCloseCallback;
  defaultViewport?: Viewport;
  process?: ChildProcess;
  ignoreHTTPSErrors?: boolean;
}

/**
 * @internal
 */
export class BidiBrowser extends Browser {
  readonly protocol = 'webDriverBiDi';

  static async from(
    connection: Connection,
    options: BidiBrowserOptions
  ): Promise<BidiBrowser> {
    const {ignoreHTTPSErrors} = options;

    const session = await Session.from(connection, {
      alwaysMatch: {
        acceptInsecureCerts: ignoreHTTPSErrors,
        webSocketUrl: true,
      },
    });

    const browser = new BidiBrowser(session);
    browser.#initialize();
    return browser;
  }

  // keep-sorted start
  readonly #browserContexts = new WeakMap<UserContext, BidiBrowserContext>();
  readonly #closeCallback?: BrowserCloseCallback;
  readonly #defaultViewport?: Viewport;
  readonly #process?: ChildProcess;
  readonly #target: Target;
  readonly session: Session;
  // keep-sorted end

  private constructor(
    session: Session,
    closeCallback?: BrowserCloseCallback,
    defaultViewport?: Viewport,
    process?: ChildProcess
  ) {
    super();

    // keep-sorted start
    this.session = session;
    this.#process = process;
    this.#closeCallback = closeCallback;
    this.#defaultViewport = defaultViewport;
    // keep-sorted end

    this.#target = new BidiBrowserTarget(this);
  }

  get #browser() {
    return this.session.browser;
  }

  get #browserName() {
    return this.session.capabilities.browserName;
  }

  get #browserVersion() {
    return this.session.capabilities.browserVersion;
  }

  get cdpSupported(): boolean {
    return !this.#browserName.toLowerCase().includes('firefox');
  }

  #initialize() {
    this.#browser.once('closed', () => {
      void this.#closeCallback?.call(null);
    });
    this.#browser.once('disconnected', () => {
      this.emit(BrowserEvent.Disconnected, undefined);
      this.removeAllListeners();
    });

    // Initializing existing contexts.
    for (const userContext of this.#browser.userContexts) {
      const browserContext = BidiBrowserContext.from(userContext, this, {
        defaultViewport: this.#defaultViewport ?? null,
      });
      browserContext.on(BrowserContextEvent.TargetCreated, target => {
        this.emit(BrowserEvent.TargetCreated, target);
      });
      browserContext.on(BrowserContextEvent.TargetChanged, target => {
        this.emit(BrowserEvent.TargetChanged, target);
      });
      browserContext.on(BrowserContextEvent.TargetDestroyed, target => {
        this.emit(BrowserEvent.TargetDestroyed, target);
      });

      this.#browserContexts.set(userContext, browserContext);
    }
  }

  override userAgent(): never {
    throw new UnsupportedOperation();
  }

  override wsEndpoint(): string {
    // SAFETY: `webSocketUrl` is true in `Session.create`.
    return this.session.capabilities.webSocketUrl as string;
  }

  override async close(): Promise<void> {
    await this.#browser.close();
  }

  override get connected(): boolean {
    return !this.#browser.disposed;
  }

  override process(): ChildProcess | null {
    return this.#process ?? null;
  }

  override async createIncognitoBrowserContext(
    _options?: BrowserContextOptions
  ): Promise<BidiBrowserContext> {
    // TODO: implement incognito context https://github.com/w3c/webdriver-bidi/issues/289.
    return this.defaultBrowserContext();
  }

  override async version(): Promise<string> {
    return `${this.#browserName}/${this.#browserVersion}`;
  }

  override browserContexts(): BidiBrowserContext[] {
    return [...this.#browser.userContexts].map(context => {
      // SAFETY: We are using `context`.
      return this.#browserContexts.get(context)!;
    });
  }

  override defaultBrowserContext(): BidiBrowserContext {
    // SAFETY: We initialized the browser beforehand.
    return this.#browserContexts.get(this.#browser.defaultUserContext)!;
  }

  override async newPage(): Promise<Page> {
    return await this.defaultBrowserContext().newPage();
  }

  override targets(): Target[] {
    return [
      this.target(),
      ...this.browserContexts().flatMap(context => {
        return context.targets();
      }),
    ];
  }

  override target(): Target {
    return this.#target;
  }

  override async disconnect(): Promise<void> {
    await this.session.end();
  }
}
