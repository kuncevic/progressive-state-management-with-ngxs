import { Injectable } from '@angular/core';
import { RxService } from 'rx-service';

interface Counter {
  value1: number;
  value2: number;
  value3: number;
}

const initialState: Counter = { value1: 0, value2: 0, value3: 0 };

@Injectable({
  providedIn: 'root',
})
export class CounterService extends RxService<Counter> {
  constructor() {
    super(initialState);
  }

  public setValue1(value1): void {
    this.setState((state) => ({ ...state, value1: state.value1 + value1 }));
  }

  public setValue2(value2: number): void {
    this.setState((state) => ({ ...state, value2: state.value2 + value2 }));
  }

  public setValue3(value3: number): void {
    this.setState((state) => ({ ...state, value3: state.value3 + value3 }));
  }
}
