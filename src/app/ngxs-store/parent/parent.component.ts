import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Summarize, UpdateValue1 } from '../state/actions';
import { CounterQueries } from '../state/counter.queries';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @Select(CounterQueries.value1) value$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  updateValue(value: number): void {
    this.store.dispatch(new UpdateValue1(value));
    this.store.dispatch(new Summarize());
  }
}
