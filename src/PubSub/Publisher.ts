import type { Broker } from './Base';

export class Publisher<T> {
  constructor(private broker: Broker<T>) {}

  publish(topic: string, message: T): void {
    this.broker.publish(topic, message);
  }
}
