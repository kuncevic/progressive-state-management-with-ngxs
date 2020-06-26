import { Selector } from '@ngxs/store';
import { Counter, CounterState } from './counter.state';


export class CounterQueries {

  @Selector([CounterState])
  public static count(counter: Counter): number {
    return counter.number;
  }

}
