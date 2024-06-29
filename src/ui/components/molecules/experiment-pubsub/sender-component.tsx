import { SimpleBroker } from '@PubSub/SimpleBroker';
import { SimplePublisher } from '@PubSub/SimplePublisher';
import type { BasicMessage } from '@PubSub/messages/messages-model';
import ButtonWithVariants from 'ui/components/atoms/button-with-variants/ButtonWithVariants';

export function SenderComponent() {
  const broker: SimpleBroker<BasicMessage> = SimpleBroker.getInstance();
  const publish = new SimplePublisher<BasicMessage>(broker);
  let count = 0;
  publish.publish('feed-thread', {
    id: '1',
    text: `Hello world `,
    timestamp: Date.now(),
  });
  const handlerSender = () => {
    count += 1;
    publish.publish('feed-thread', {
      id: '1',
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      text: `Hello world ${count}`,
      timestamp: Date.now(),
    });
  };
  return (
    <ButtonWithVariants variant="secondary" onClick={handlerSender}>
      Send data
    </ButtonWithVariants>
  );
}
