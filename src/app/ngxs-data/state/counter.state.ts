import { Injectable } from '@angular/core';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';

export interface Counter {
  number: number;
}

const initialState: Counter = { number: 0 };

@StateRepository()
@State<Counter>({
  name: 'item',
  defaults: initialState,
})
@Injectable()
export class CounterState extends NgxsDataRepository<Counter> {
  @DataAction()
  setCounter(value): void {
    this.ctx.setState((state) => state.number + value);
  }
  @DataAction()
  resetCounter(): void {
    this.ctx.setState(initialState);
  }
}
