export interface EventEmitter<T> {
  callBack: (message: T) => void;
}
