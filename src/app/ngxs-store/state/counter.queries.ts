import { Selector } from '@ngxs/store';
import { Counter, CounterState } from './counter.state';

export class CounterQueries {

  @Selector([CounterState])
  public static sum(counter: Counter): number {
    return counter.value1 + counter.value2 + counter.value3;
  }

  @Selector([CounterState])
  public static value1(counter: Counter): number {
    return counter.value1;
  }

  @Selector([CounterState])
  public static value2(counter: Counter): number {
    return counter.value2;
  }

  @Selector([CounterState])
  public static value3(counter: Counter): number {
    return counter.value3;
  }
}
