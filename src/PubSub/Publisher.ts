import { Broker } from './Broker';
import { Message } from './Message';

export class Publisher {
  constructor(private broker: Broker) {}

  publish(message: Message) {
    this.broker.publish(message);
  }
}
