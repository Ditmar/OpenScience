import { Message } from "./Message";

export interface Subscriber {
  receive(message: Message): void;
}