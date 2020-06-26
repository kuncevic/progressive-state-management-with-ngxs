import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AdjustCounter } from '../state/actions';
import { CounterState } from '../state/counter.state';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @Select(CounterState.count) count$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  setCounter(value: number): void {
    this.store.dispatch(new AdjustCounter(value));
  }

}
