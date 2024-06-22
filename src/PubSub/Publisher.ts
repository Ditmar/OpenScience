import type { Broker } from "./Ibase";

export class Publisher {
  constructor(private broker: Broker) {}

  publish(topic: string, message: any): void {
    this.broker.publish(topic, message);
  }
}
