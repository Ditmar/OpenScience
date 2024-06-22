import type { Subscriber as ISubscriber } from "./Ibase";

export class Subscriber implements ISubscriber {
  subscribe(topic: string, callback: (message: any) => void): void {
    // Implementation here
  }
}
