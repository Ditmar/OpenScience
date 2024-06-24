import type { EventEmitter } from './types/types';

export interface Publisher<T> {
  publish(topic: string, message: T): void;
}

export interface Subscriber<T> {
  subscribe(topic: string, callback: EventEmitter<T>): void;
}

export interface Broker<T> {
  publish(topic: string, message: T): void;
  subscribe(topic: string, callback: EventEmitter<T>): void;
}
