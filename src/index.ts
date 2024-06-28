import { SimpleBroker } from './PubSub/SimpleBroker';
import { SimplePublisher } from './PubSub/SimplePublisher';
import { SimpleSubscriber } from './PubSub/SimpleSubscriber';
import type { EventEmitter } from './PubSub/types/types';

const broker = new SimpleBroker<string>();

const publisher = new SimplePublisher<string>(broker);

const subscriber = new SimpleSubscriber<string>(broker);

const eventEmitter: EventEmitter<string> = {
    callBack: (mensaje: string) => {
        console.log(`Mensaje recibido: ${mensaje}`);
    }
};

subscriber.subscribe('tema-ejemplo', eventEmitter);

publisher.publish('tema-ejemplo', '¡Hola, PubSub!');