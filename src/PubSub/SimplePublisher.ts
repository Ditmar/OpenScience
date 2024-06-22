import { Publisher } from "./Publisher";
import { SimpleBroker } from "./SimpleBroker";

export class SimplePublisher extends Publisher {
  constructor(broker: SimpleBroker) {
    super(broker);
  }

  publish(topic: string, message: any): void {
    super.publish(topic, message);
  }
}
