import { Subscriber } from './Subscriber';
import { SimpleBroker } from './SimpleBroker';

export class SimpleSubscriber<T> extends Subscriber<T> {
  public constructor(broker: SimpleBroker<T>) {
    super(broker);
  }
}
