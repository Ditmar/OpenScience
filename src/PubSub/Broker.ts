import type { Broker as IBroker, Subscriber, Publisher } from "./Ibase";

export class Broker implements IBroker {
  private subscribers: { [key: string]: ((message: any) => void)[] } = {};

  registerPublisher(publisher: Publisher): void {
    // Implementation here
  }

  registerSubscriber(subscriber: Subscriber): void {
    // Implementation here
  }

  publish(topic: string, message: any): void {
    if (this.subscribers[topic]) {
      this.subscribers[topic].forEach(callback => callback(message));
    }
  }

  subscribe(topic: string, callback: (message: any) => void): void {
    if (!this.subscribers[topic]) {
      this.subscribers[topic] = [];
    }
    this.subscribers[topic].push(callback);
  }
}
