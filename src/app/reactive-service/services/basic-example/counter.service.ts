import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Counter {
  value1: number;
  value2: number;
  value3: number;
}

const initialState: Counter = { value1: 0, value2: 0, value3: 0 };

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private data$ = new BehaviorSubject<Counter>(initialState);
  state$ = this.data$.asObservable();

  constructor() {}

  public setValue1(value1): void {
    const currentData = this.data$.getValue();
    this.data$.next({ ...currentData, value1: currentData.value1 + value1 });
  }

  public setValue2(value2: number): void {
    const currentData = this.data$.getValue();
    this.data$.next({ ...currentData, value2: currentData.value2 + value2 });
  }

  public setValue3(value3: number): void {
    const currentData = this.data$.getValue();
    this.data$.next({ ...currentData, value3: currentData.value3 + value3 });
  }

  public sum(): Observable<number> {
    return this.data$.pipe(map((x) => x.value1 + x.value2 + x.value3));
  }
}
