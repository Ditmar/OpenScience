import type { Subscriber } from "./Subscriber";
import { Message } from "./Message";

export class SimpleSubscriber implements Subscriber {
  receive(message: Message) {
    console.log(`Received message: ${message.content}`);
  }
}
