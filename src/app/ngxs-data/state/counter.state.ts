import { Injectable } from '@angular/core';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';

export interface Counter {
  value1: number;
  value2: number;
  value3: number;
}

const initialState: Counter = { value1: 0, value2: 0, value3: 0 };

@StateRepository()
@State<Counter>({
  name: 'counter',
  defaults: initialState,
})
@Injectable()
export class CounterDataState extends NgxsDataRepository<Counter> {
  @DataAction()
  public updateValue1(value1): void {
    this.setState(patch({ value1: this.getState().value1 + value1 }));
  }
  @DataAction()
  public updateValue2(value2: number): void {
    this.setState(patch({ value2: this.getState().value2 + value2 }));
  }
  @DataAction()
  public updateValue3(value3: number): void {
    this.setState(patch({ value3: this.getState().value3 + value3 }));
  }
  @DataAction()
  resetCounter(): void {
    this.ctx.setState(initialState);
  }
}
