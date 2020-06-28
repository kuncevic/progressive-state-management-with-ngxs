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

  public calculate(value1: number, value2: number, value3: number): void {
    this.setState({
      sum: value1 + value2 + value3,
      value1: this.getState().value1,
      value2: this.getState().value2,
      value3: this.getState().value3,
    });
  }

  public calculate2(): void {
    this.setState({
      sum:
        this.getState().value1 +
        this.getState().value2 +
        this.getState().value3,
      value1: this.getState().value1,
      value2: this.getState().value2,
      value3: this.getState().value3,
    });
  }

  public setValue1(value1): void {
    this.setState({
      sum: this.getState().sum,
      value1: this.getState().value1 + value1,
      value2: this.getState().value2,
      value3: this.getState().value3,
    });

    this.calculate2();
  }

  public setValue2(value2: number): void {
    this.setState({
      sum: this.getState().sum,
      value1: this.getState().value1,
      value2: this.getState().value2 + value2,
      value3: this.getState().value3,
    });
    this.calculate2();
  }

  public setValue3(value3: number): void {
    this.setState({
      sum: this.getState().sum,
      value1: this.getState().value1,
      value2: this.getState().value2,
      value3: this.getState().value3 + value3,
    });
    this.calculate2();
  }

  public reset(): void {
    this.setState(initialState);
  }
}
