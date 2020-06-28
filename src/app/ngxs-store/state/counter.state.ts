import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AdjustCounter, ResetCounter } from './actions';

export interface Counter {
  number: number;
  //number2: number;
}

const initialState: Counter = { number: 0 };

@State<Counter>({
  name: 'counter',
  defaults: initialState,
})
@Injectable()
export class CounterState {
  @Selector()
  public static count(counter: Counter): number {
    return counter.number;
  }

  // @Selector()
  // public static count2(counter: Counter): number {
  //   return counter.number2;
  // }

  // @Selector([CounterState.count])
  // public static anything(value: number): number {
  //   return isOdd(value);
  // }

  // @Selector([CounterState.count2])
  // public static anything2(value: number): number {
  //   return isOdd(value);
  // }

  @Action(AdjustCounter)
  adjustCounter(ctx: StateContext<Counter>, { amount }: AdjustCounter): void {
    ctx.setState((state) => ({ number: state.number + amount }));
  }

  @Action(ResetCounter)
  resetCounter(ctx: StateContext<Counter>): void {
    ctx.setState(initialState);
  }
}
