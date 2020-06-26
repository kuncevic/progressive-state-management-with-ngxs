import { Injectable } from '@angular/core';
import { ReactiveStore } from './reactive-store';

interface Counter {
  number: number;
}

const initialMessage: Counter = { number: 0 };

@Injectable({
  providedIn: 'root',
})
export class MessageStore extends ReactiveStore<Counter> {
  constructor() {
    super(initialMessage);
  }

  public setCounter(value: number): void {
     this.setState({ number: this.getState().number + value });
  }

  public reset(): void {
    this.setState(initialMessage);
  }
}
