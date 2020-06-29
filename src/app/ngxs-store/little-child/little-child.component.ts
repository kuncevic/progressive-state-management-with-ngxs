import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UpdateValue3 } from '../state/actions';
import { CounterQueries } from '../state/counter.queries';

@Component({
  selector: 'app-little-child',
  templateUrl: './little-child.component.html',
  styleUrls: ['./little-child.component.scss'],
})
export class LittleChildComponent implements OnInit {
  @Select(CounterQueries.value3) value$: Observable<number>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    //this.value$ = this.counterStore.state$.pipe(map((x) => x.value3));
  }

  updateValue(value): void {
    this.store.dispatch(new UpdateValue3(value));
  }
}
