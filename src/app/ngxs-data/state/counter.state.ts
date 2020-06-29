import { Injectable } from '@angular/core';
import { Computed, DataAction, Payload, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';

export interface Counter {
  value1: number;
  value2: number;
  value3: number;
}

@StateRepository()
@State<Counter>({
  name: 'counterData',
  defaults: { value1: 0, value2: 0, value3: 0 }
})
@Injectable()
export class CounterDataState extends NgxsDataRepository<Counter> {

  @Computed()
  public get sum(): number {
    return this.snapshot.value1 + this.snapshot.value2 + this.snapshot.value3;
  }

  @DataAction()
  public updateValue1(@Payload('value1') value1): void {
    this.ctx.setState((state) => ({ ...state,  value1: state.value1 + value1 }));
  }

  @DataAction()
  public updateValue2(@Payload('value2') value2: number): void {
    this.ctx.setState((state) => ({ ...state,  value2: state.value2 + value2 }));
  }

  @DataAction()
  public updateValue3(@Payload('value3') value3: number): void {
    this.ctx.setState((state) => ({ ...state,  value3: state.value3 + value3 }));
  }

}
