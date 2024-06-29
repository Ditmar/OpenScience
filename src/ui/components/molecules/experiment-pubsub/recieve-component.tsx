import LabelArticles from 'ui/components/atoms/label-articles/LabelArticles';
import { SimpleBroker } from '@PubSub/SimpleBroker';
import { Subscriber } from '@PubSub/Subscriber';
import type { BasicMessage } from '@PubSub/messages/messages-model';
import type { EventEmitter } from '@PubSub/types/types';
import { useState } from 'react';

export function RecieveComponent() {
  const [text, setText] = useState('');
  const broker: SimpleBroker<BasicMessage> = SimpleBroker.getInstance();
  const subscriber: Subscriber<BasicMessage> = new Subscriber<BasicMessage>(broker);
  const emitter: EventEmitter<BasicMessage> = {
    callBack: (message: BasicMessage) => {
      setText(message.text);
    },
  };
  subscriber.subscribe('feed-thread', emitter);

  return <LabelArticles variant="primary">{text}</LabelArticles>;
}
