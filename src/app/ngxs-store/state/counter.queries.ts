import { Selector } from '@ngxs/store';
import { Counter, CounterState } from './counter.state';


export class CounterQueries {

  @Selector([CounterState])
  public static count(counter: Counter): number {
    return counter.number;
  }

  // @Selector([CounterState])
  // public static count2(counter: Counter): number {
  //   return counter.number2;
  // }

  // @Selector([CounterQueries.count])
  // public static anything(value: number): number {
  //   return isOdd(value);
  // }

  // @Selector([CounterQueries.count2])
  // public static anything2(value: number): number {
  //   return isOdd(value);
  // }

}
