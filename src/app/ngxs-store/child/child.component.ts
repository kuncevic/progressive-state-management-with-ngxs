import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AdjustCounter } from '../state/actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Select(CounterState.count) count$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  setCounter(value: number): void {
    this.store.dispatch(new AdjustCounter(value));
  }

}
