import { Injectable } from '@angular/core';
import { ReactiveStore } from './reactive-store';

interface Counter {
  value1: number;
  value2: number;
  value3: number;
  sum: number;
}

const initialState: Counter = { sum: 0, value1: 0, value2: 0, value3: 0 };

@Injectable({
  providedIn: 'root',
})
export class CounterStore extends ReactiveStore<Counter> {
  constructor() {
    super(initialState);
  }

  public sum(): void {
    const state = this.getState();
    this.setState({
      sum:
        state.value1 +
        state.value2 +
        state.value3,
      value1: state.value1,
      value2: state.value2,
      value3: state.value3,
    });
  }

  public setValue1(value1): void {
    const state = this.getState();
    this.setState({
      sum: state.sum,
      value1: state.value1 + value1,
      value2: state.value2,
      value3: state.value3,
    });

    this.sum();
  }

  public setValue2(value2: number): void {
    const state = this.getState();
    this.setState({
      sum: state.sum,
      value1: state.value1,
      value2: state.value2 + value2,
      value3: state.value3,
    });

    this.sum();
  }

  public setValue3(value3: number): void {
    const state = this.getState();
    this.setState({
      sum: state.sum,
      value1: state.value1,
      value2: state.value2,
      value3: state.value3 + value3,
    });

    this.sum();
  }

  public reset(): void {
    this.setState(initialState);
  }
}
