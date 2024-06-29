import { Broker } from './Broker';
import type { BasicMessage } from './messages/messages-model';

export class SimpleBroker<T> extends Broker<T> {
  private static instance: SimpleBroker<BasicMessage> | null = null;

  private constructor() {
    super();
  }

  static getInstance(): SimpleBroker<BasicMessage> {
    if (!SimpleBroker.instance) {
      SimpleBroker.instance = new SimpleBroker<BasicMessage>();
    }
    return SimpleBroker.instance;
  }
}
