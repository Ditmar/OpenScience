import { Subscriber } from "./Subscriber";
import { SimpleBroker } from "./SimpleBroker";

export class SimpleSubscriber extends Subscriber {
  constructor(private broker: SimpleBroker) {
    super();
  }

  subscribe(topic: string, callback: (message: any) => void): void {
    this.broker.subscribe(topic, callback);
  }
}