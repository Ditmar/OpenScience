import { Publisher } from './Publisher';
import { SimpleBroker } from './SimpleBroker';

export class SimplePublisher<T> extends Publisher<T> {
  public constructor(broker: SimpleBroker<T>) {
    super(broker);
  }

  publish(topic: string, message: T): void {
    super.publish(topic, message);
  }
}
