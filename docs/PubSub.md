## `Pub-Sub`


Pub/Sub is a design pattern that allows application components to communicate with each other asynchronously.


# Using the Singleton Pattern
The Singleton pattern ensures that a class has a single instance and provides a global access point to that instance. In the pub-sub service, this is crucial to ensure that all components interact with the same event "bus".

This system includes:

# Interfaces: Publisher, Subscriber, and Broker.

# Classes:
- Broker: Manages subscriptions and publishing messages to topics.
- Publisher: Publishes messages to a broker.
- Subscriber: Subscribes to topics and handles incoming messages.
- SimpleBroker, SimplePublisher, and SimpleSubscriber: Simplified implementations of the respective components.

# Pub-Sub Service Workflow
- Single Instantiation: The PubSub service is instantiated only once due to the use of the Singleton pattern.
- Event Publishing: ComponentA publishes an event with the relevant data.
- Event Subscription: ComponentB subscribes to the event and defines a callback function that will be executed when the event is published.
- Unsubscribe: ComponentB is unsubscribed from the event when it is unmounted to prevent possible memory leaks.

# Advantages of the Singleton Approach
- Consistency: All components interact with the same instance of the PubSub service.
- Global Control: Easy to manage and maintain a single point of control for event communication.
- Efficiency: Avoid creating multiple instances of the service, saving resources.

# If you want an example of implementation, check the files in the experiment-PubSub folder, there you have an example of receive and sender

# explanation of the structure of receive

1. Imports

The code imports several components and data types: * LabelArticles: used to display text on a label. * SimpleBroker and Subscriber: Classes used to implement the publish-subscribe architecture. * BasicMessage: A data type that represents a basic message with a text. * EventEmitter: A data type that represents an event emitter. * useState - A hook used to handle the state of a component.

2. Declaration of ReceiverComponent component

The ReceiverComponent component is declared as a function that returns a JSX element.

3. Component status

The useState hook is used to create a state text initialized with an empty string. This state will be used to store the text of the received message.

4. Creation of the broker and the subscriber

An instance of SimpleBroker is created, which is the object that is responsible for managing the publication and subscription of messages. Then, a Subscriber object is created that subscribes to a specific topic ('feed-thread') in the broker.

5. Creating the event emitter

An emitter object is created that implements the EventEmitter interface. This object has a callBack method that is called when a message is received. In this case, the callBack method updates the text state with the text of the received message.

6. Topic subscription

The subscribe method of the subscriber is called, passing the topic ('feed-thread') and the event emitter (emitter). In this way, the subscriber subscribes to the topic and is responsible for calling the sender's callBack method when it receives a message.

7. Component rendering

Finally, the ReceiverComponent component returns a JSX element that is used by the LabelArticles component to display the text of the received message. The text is obtained from the text state.

# explanation of the structure of sender

1. Imports

The code imports several components and data types: * SimpleBroker and SimplePublisher: Classes used to implement the publish-subscribe architecture. * BasicMessage: A data type that represents a basic message with a text. * ButtonWithVariants - Used to display a button with variants.

2. SenderComponent component declaration

The SenderComponent component is declared as a function that returns a JSX element.

3. Creation of the broker and the publisher

An instance of SimpleBroker is created, which is the object that is responsible for managing the publication and subscription of messages. Next, a SimplePublisher object is created that is used to publish messages to the broker.

4. Initial publication of the message

An initial message is published in the 'feed-thread' topic with a fixed text (Hello world).

5. Creating the shipping handler

A send handler handlerSender is defined that is called when the button is clicked. This handler increments a counter count and publishes a new message to the 'feed-thread' topic with text that includes the current value of the counter (Hello world ${count}).

6. Component rendering

Finally, the SenderComponent component returns a JSX element that is used by the ButtonWithVariants component to display a button with the child variant. The button has a click handler associated with the handlerSender send handler.