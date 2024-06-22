export interface Publisher {
    publish(topic: string, message: any): void;
  }
  
  export interface Subscriber {
    subscribe(topic: string, callback: (message: any) => void): void;
  }
  
  export interface Broker {
    registerPublisher(publisher: Publisher): void;
    registerSubscriber(subscriber: Subscriber): void;
    publish(topic: string, message: any): void;
    subscribe(topic: string, callback: (message: any) => void): void;
  }
  