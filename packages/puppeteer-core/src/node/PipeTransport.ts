/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type {ConnectionTransport} from '../common/ConnectionTransport.js';
import {EventSubscription} from '../common/EventEmitter.js';
import {debugError} from '../common/util.js';
import {throwIfDisposed} from '../util/decorators.js';
import {DisposableStack} from '../util/disposable.js';

/**
 * @internal
 */
export class PipeTransport implements ConnectionTransport {
  #pipeWrite: NodeJS.WritableStream;
  #subscriptions = new DisposableStack();

  disposed = false;
  #pendingMessage = '';

  onclose?: () => void;
  onmessage?: (value: string) => void;

  constructor(
    pipeWrite: NodeJS.WritableStream,
    pipeRead: NodeJS.ReadableStream
  ) {
    this.#pipeWrite = pipeWrite;
    this.#subscriptions.use(
      new EventSubscription(pipeRead as any, 'data', (buffer: unknown) => {
        return this.#dispatch(buffer as Buffer);
      })
    );
    this.#subscriptions.use(
      new EventSubscription(pipeRead as any, 'close', () => {
        if (this.onclose) {
          this.onclose.call(null);
        }
      })
    );
    this.#subscriptions.use(
      new EventSubscription(pipeRead as any, 'error', debugError)
    );
    this.#subscriptions.use(
      new EventSubscription(pipeWrite as any, 'error', debugError)
    );
  }

  @throwIfDisposed()
  send(message: string): void {
    this.#pipeWrite.write(message);
    this.#pipeWrite.write('\0');
  }

  @throwIfDisposed()
  #dispatch(buffer: Buffer): void {
    let end = buffer.indexOf('\0');
    if (end === -1) {
      this.#pendingMessage += buffer.toString();
      return;
    }
    const message = this.#pendingMessage + buffer.toString(undefined, 0, end);
    if (this.onmessage) {
      this.onmessage.call(null, message);
    }

    let start = end + 1;
    end = buffer.indexOf('\0', start);
    while (end !== -1) {
      if (this.onmessage) {
        this.onmessage.call(null, buffer.toString(undefined, start, end));
      }
      start = end + 1;
      end = buffer.indexOf('\0', start);
    }
    this.#pendingMessage = buffer.toString(undefined, start);
  }

  close(): void {
    this.disposed = true;
    this.#subscriptions.dispose();
  }
}
