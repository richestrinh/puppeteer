/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import {BrowserContext, BrowserContextEvent} from '../api/BrowserContext.js';
import type {Page} from '../api/Page.js';
import type {Target} from '../api/Target.js';
import {UnsupportedOperation} from '../common/Errors.js';
import type {Viewport} from '../common/Viewport.js';

import type {BidiBrowser} from './Browser.js';
import type {BrowsingContext} from './core/BrowsingContext.js';
import type {UserContext} from './core/UserContext.js';
import type {BidiPage} from './Page.js';
import {BidiPageTarget} from './Target.js';

/**
 * @internal
 */
export interface BidiBrowserContextOptions {
  defaultViewport: Viewport | null;
}

/**
 * @internal
 */
export class BidiBrowserContext extends BrowserContext {
  static from(
    userContext: UserContext,
    browser: BidiBrowser,
    options: BidiBrowserContextOptions
  ): BidiBrowserContext {
    const context = new BidiBrowserContext(userContext, browser, options);
    context.#initialize();
    return context;
  }

  // keep-sorted start
  readonly #browser: BidiBrowser;
  readonly #defaultViewport: Viewport | null;
  readonly #pageTargets = new WeakMap<BrowsingContext, BidiPageTarget>();
  readonly #userContext: WeakRef<UserContext>;
  // keep-sorted end

  private constructor(
    context: UserContext,
    browser: BidiBrowser,
    options: BidiBrowserContextOptions
  ) {
    super();

    // keep-sorted start
    this.#userContext = new WeakRef(context);
    this.#browser = browser;
    this.#defaultViewport = options.defaultViewport;
    // keep-sorted end
  }

  #initialize(): void {
    // SAFETY: This will be created in `from` before we call `deref` here.
    const userContext = this.#userContext.deref()!;
    userContext.on('browsingcontext', ({browsingContext}) => {
      const target = new BidiPageTarget(browsingContext, this);
      this.#pageTargets.set(browsingContext, target);
      this.emit(BrowserContextEvent.TargetCreated, target);

      browsingContext.on('destroyed', () => {
        this.#pageTargets.delete(browsingContext);
        this.emit(BrowserContextEvent.TargetDestroyed, target);
      });
    });
    for (const browsingContext of userContext.browsingContexts) {
      const target = new BidiPageTarget(browsingContext, this);
      this.#pageTargets.set(browsingContext, target);
      this.emit(BrowserContextEvent.TargetCreated, target);

      browsingContext.on('destroyed', () => {
        this.#pageTargets.delete(browsingContext);
        this.emit(BrowserContextEvent.TargetDestroyed, target);
      });
    }
  }

  override browser(): BidiBrowser {
    return this.#browser;
  }

  override async newPage(): Promise<Page> {
    const userContext = this.#userContext.deref();
    if (userContext === undefined) {
      throw new Error('BrowserContext is closed.');
    }

    const browsingContext = await userContext.createBrowsingContext(
      Bidi.BrowsingContext.CreateType.Tab
    );

    const pageTarget = this.#pageTargets.get(browsingContext);
    if (pageTarget === undefined) {
      throw new Error('Page already closed.');
    }

    const page = await pageTarget.asPage();
    if (this.#defaultViewport) {
      try {
        await page.setViewport(this.#defaultViewport);
      } catch {
        // No support for setViewport in Firefox.
      }
    }

    return page;
  }

  override async close(): Promise<void> {
    if (this === this.#browser.defaultBrowserContext()) {
      // TODO: We should throw once incognito contexts are supported.
      return;
    }
    const userContext = this.#userContext.deref();
    if (userContext === undefined) {
      return;
    }
    await userContext.close();
  }

  override async pages(): Promise<BidiPage[]> {
    const userContext = this.#userContext.deref();
    if (userContext === undefined) {
      // User context is closed, so return an empty array.
      return [];
    }

    const pages = [];
    for (const context of userContext.browsingContexts) {
      // SAFETY: This will be created in `#initialize` before we call `get`
      // here.
      pages.push(await this.#pageTargets.get(context)!.asPage());
    }
    return pages;
  }

  override isIncognito(): boolean {
    // TODO: implement incognito context https://github.com/w3c/webdriver-bidi/issues/289.
    return false;
  }

  override targets(): Target[] {
    const userContext = this.#userContext.deref();
    if (userContext === undefined) {
      // User context is closed, so return an empty array.
      return [];
    }

    const targets = [];
    for (const context of userContext.browsingContexts) {
      // SAFETY: This will be created in `#initialize` before we call `get`
      // here.
      targets.push(this.#pageTargets.get(context)!);
    }
    return targets;
  }

  override overridePermissions(): never {
    throw new UnsupportedOperation();
  }

  override clearPermissionOverrides(): never {
    throw new UnsupportedOperation();
  }
}
