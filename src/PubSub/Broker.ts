import type { Broker as IBroker } from './Base';
import type { EventEmitter } from './types/types';

export class Broker<T> implements IBroker<T> {
  private subscribers: Record<string, EventEmitter<T>[]>;

  constructor() {
    this.subscribers = {};
  }

  publish(topic: string, message: T): void {
    if (this.subscribers[topic].length === 0) {
      this.subscribers[topic].forEach((event: EventEmitter<T>) => {
        event.callBack(message);
      });
    }
  }

  subscribe(topic: string, callback: EventEmitter<T>): void {
    if (this.subscribers[topic].length === 0) {
      this.subscribers[topic] = [];
    }
    this.subscribers[topic].push(callback);
  }
}
