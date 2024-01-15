/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {CDPSession} from '../api/CDPSession.js';
import type {Page} from '../api/Page.js';
import {Target, TargetType} from '../api/Target.js';
import {UnsupportedOperation} from '../common/Errors.js';

import type {BidiBrowser} from './Browser.js';
import type {BidiBrowserContext} from './BrowserContext.js';
import type {BrowsingContext} from './core/BrowsingContext.js';
import {BidiPage} from './Page.js';

/**
 * @internal
 */
export const targets = new WeakMap<object, Target>();

/**
 * @internal
 */

export class BidiBrowserTarget extends Target {
  readonly #browser: BidiBrowser;

  constructor(browser: BidiBrowser) {
    super();
    targets.set(browser, this);

    this.#browser = browser;
  }

  override asPage(): Promise<Page> {
    throw new UnsupportedOperation();
  }
  override url(): string {
    return '';
  }
  override createCDPSession(): Promise<CDPSession> {
    throw new UnsupportedOperation();
  }
  override type(): TargetType {
    return TargetType.BROWSER;
  }
  override browser(): BidiBrowser {
    return this.#browser;
  }
  override browserContext(): BidiBrowserContext {
    return this.#browser.defaultBrowserContext();
  }
  override opener(): Target | undefined {
    return undefined;
  }
}

/**
 * @internal
 */

export class BidiPageTarget extends Target {
  readonly #browserContext: BidiBrowserContext;
  readonly #page: BidiPage;

  constructor(browsingContext: BrowsingContext, context: BidiBrowserContext) {
    super();
    this.#browserContext = context;
    this.#page = BidiPage.create(browsingContext, this);
  }

  override async page(): Promise<Page | null> {
    return this.#page;
  }
  override async asPage(): Promise<BidiPage> {
    return this.#page;
  }
  override url(): string {
    return this.#page.url();
  }
  override async createCDPSession(): Promise<CDPSession> {
    return await this.#page.createCDPSession();
  }
  override type(): TargetType {
    return TargetType.PAGE;
  }
  override browser(): BidiBrowser {
    return this.#browserContext.browser();
  }
  override browserContext(): BidiBrowserContext {
    return this.#browserContext;
  }
  override opener(): Target | undefined {
    return undefined;
  }
}
