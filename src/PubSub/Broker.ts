import type { Subscriber } from "./Subscriber";
import { Message } from "./Message";

export class Broker {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  publish(message: Message) {
    this.subscribers.forEach(sub => sub.receive(message));
  }
}