import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UpdateValue3 } from '../state/actions';
import { CounterQueries } from '../state/counter.queries';

@Component({
  selector: 'app-little-child',
  templateUrl: './little-child.component.html',
  styleUrls: ['./little-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LittleChildComponent implements OnInit {
  @Select(CounterQueries.value3) value$: Observable<number>;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  updateValue(value): void {
    this.store.dispatch(new UpdateValue3(value));
  }
}
