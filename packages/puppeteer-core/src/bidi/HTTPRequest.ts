/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import type {CDPSession} from '../api/CDPSession.js';
import type {
  ContinueRequestOverrides,
  ResponseForRequest,
} from '../api/HTTPRequest.js';
import {HTTPRequest, type ResourceType} from '../api/HTTPRequest.js';
import {UnsupportedOperation} from '../common/Errors.js';
import {invokeAtMostOnceForArguments} from '../util/decorators.js';

import type {BidiRequest} from './core/Request.js';
import type {BidiFrame} from './Frame.js';
import {BidiHTTPResponse} from './HTTPResponse.js';

export const requests = new WeakMap<BidiRequest, BidiHTTPRequest>();

/**
 * @internal
 */
export class BidiHTTPRequest extends HTTPRequest {
  static create(
    bidiRequest: BidiRequest,
    frame: BidiFrame | undefined
  ): BidiHTTPRequest {
    const request = new BidiHTTPRequest(bidiRequest, frame);
    request.#initialize();
    return request;
  }

  #request: BidiRequest;

  #frame: BidiFrame | undefined;

  #response: BidiHTTPResponse | null = null;

  private constructor(request: BidiRequest, frame: BidiFrame | undefined) {
    super();
    requests.set(request, this);

    this.#request = request;
    this.#frame = frame;
  }

  override get client(): CDPSession {
    throw new Error('Method not implemented.');
  }

  #initialize() {
    this.#request.once('success', data => {
      this.#response = BidiHTTPResponse.create(data, this);
    });
  }

  override url(): string {
    return this.#request.url;
  }

  override resourceType(): ResourceType {
    return this.initiator().type as ResourceType;
  }

  override method(): string {
    return this.#request.method;
  }

  override postData(): string | undefined {
    return undefined;
  }

  override hasPostData(): boolean {
    return false;
  }

  override async fetchPostData(): Promise<string | undefined> {
    return undefined;
  }

  @invokeAtMostOnceForArguments
  override headers(): Record<string, string> {
    const headers: Record<string, string> = {};
    for (const header of this.#request.headers) {
      headers[header.name.toLowerCase()] = header.value.value;
    }
    return headers;
  }

  override response(): BidiHTTPResponse | null {
    return this.#response;
  }

  override failure(): {errorText: string} | null {
    if (this.#request.error === undefined) {
      return null;
    }
    return {errorText: this.#request.error};
  }

  override isNavigationRequest(): boolean {
    return !!this.#request.navigation;
  }

  override initiator(): Bidi.Network.Initiator {
    return this.#request.initiator;
  }

  override redirectChain(): BidiHTTPRequest[] {
    if (this.#request.redirect === undefined) {
      return [];
    }

    // SAFETY: `Frame.#initialize` listeners and the BidiHTTPRequest constructor
    // will ensure this is here.
    const redirects = [requests.get(this.#request.redirect)!];
    for (const request of redirects) {
      if (request.#request.redirect !== undefined) {
        // SAFETY: `Frame.#initialize` listeners and the BidiHTTPRequest
        // constructor will ensure this is here.
        redirects.push(requests.get(request.#request.redirect)!);
      }
    }
    return redirects;
  }

  override enqueueInterceptAction(
    pendingHandler: () => void | PromiseLike<unknown>
  ): void {
    // Execute the handler when interception is not supported
    void pendingHandler();
  }

  override frame(): BidiFrame | null {
    return this.#frame ?? null;
  }

  override continueRequestOverrides(): never {
    throw new UnsupportedOperation();
  }

  override continue(_overrides: ContinueRequestOverrides = {}): never {
    throw new UnsupportedOperation();
  }

  override responseForRequest(): never {
    throw new UnsupportedOperation();
  }

  override abortErrorReason(): never {
    throw new UnsupportedOperation();
  }

  override interceptResolutionState(): never {
    throw new UnsupportedOperation();
  }

  override isInterceptResolutionHandled(): never {
    throw new UnsupportedOperation();
  }

  override finalizeInterceptions(): never {
    throw new UnsupportedOperation();
  }

  override abort(): never {
    throw new UnsupportedOperation();
  }

  override respond(
    _response: Partial<ResponseForRequest>,
    _priority?: number
  ): never {
    throw new UnsupportedOperation();
  }
}
