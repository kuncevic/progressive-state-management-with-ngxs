import { Injectable } from '@angular/core';
import { ReactiveStore } from './reactive-store';

interface Counter {
  number: number;
}

const initialState: Counter = { number: 0 };

@Injectable({
  providedIn: 'root',
})
export class CounterStore extends ReactiveStore<Counter> {
  constructor() {
    super(initialState);
  }

  public setCounter(value: number): void {
     this.setState({ number: this.getState().number + value });
  }

  public reset(): void {
    this.setState(initialState);
  }
}
