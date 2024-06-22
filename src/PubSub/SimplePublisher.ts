import { Publisher } from './Publisher';
import { Message } from './Message';
import { SimpleBroker } from './SimpleBroker';

export class SimplePublisher extends Publisher {
  constructor(broker: SimpleBroker) {
    super(broker);
  }

  sendMessage(content: string) {
    const message = new Message(content);
    this.publish(message);
  }
}
