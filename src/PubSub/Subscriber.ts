import type { Broker, Subscriber as ISubscriber } from './Base';
import type { EventEmitter } from './types/types';

export class Subscriber<T> implements ISubscriber<T> {
  private broker: Broker<T>;

  constructor(broker: Broker<T>) {
    this.broker = broker;
  }

  subscribe(topic: string, callback: EventEmitter<T>): void {
    this.broker.subscribe(topic, callback);
  }
}
