import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { ResetCounter, Summarize, UpdateValue1, UpdateValue2, UpdateValue3 } from './actions';

export interface Counter {
  value1: number;
  value2: number;
  value3: number;
  sum: number;
}

const initialState: Counter = { sum: 0, value1: 0, value2: 0, value3: 0 };

@State<Counter>({
  name: 'counter',
  defaults: initialState,
})
@Injectable()
export class CounterState {

  @Action(Summarize)
  summarize(ctx: StateContext<Counter>): void {
    ctx.setState({
      sum:
        ctx.getState().value1 + ctx.getState().value2 + ctx.getState().value3,
      value1: ctx.getState().value1,
      value2: ctx.getState().value2,
      value3: ctx.getState().value3,
    });
  }

  @Action(UpdateValue1)
  updateValue1(ctx: StateContext<Counter>, { amount }: UpdateValue1): void {
    ctx.setState( patch({ value1: ctx.getState().value1 + amount }));
  }

  @Action(UpdateValue2)
  updateValue2(ctx: StateContext<Counter>, { amount }: UpdateValue2): void {
    ctx.setState(patch({ value2: ctx.getState().value2 + amount }));
  }

  @Action(UpdateValue3)
  updateValue3(ctx: StateContext<Counter>, { amount }: UpdateValue3): void {
    ctx.setState(patch({ value3: ctx.getState().value3 + amount }));
  }

  @Action(ResetCounter)
  resetCounter(ctx: StateContext<Counter>): void {
    ctx.setState(initialState);
  }
}
