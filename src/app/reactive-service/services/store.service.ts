import { Injectable } from '@angular/core';
import { ReactiveStore } from './reactive-store';

interface Counter {
  value1: number;
  value2: number;
  value3: number;
}

const initialState: Counter = { value1: 0, value2: 0, value3: 0 };

@Injectable({
  providedIn: 'root',
})
export class CounterStore extends ReactiveStore<Counter> {
  constructor() {
    super(initialState);
  }

  public setValue1(value1): void {
    const state = this.getState();
    this.setState({ value1: state.value1 + value1 });
  }

  public setValue2(value2: number): void {
    const state = this.getState();
    this.setState({ value2: state.value2 + value2 });
  }

  public setValue3(value3: number): void {
    const state = this.getState();
    this.setState({ value3: state.value3 + value3 });
  }

  public reset(): void {
    this.setState(initialState);
  }
}
