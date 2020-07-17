import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UpdateValue2 } from '../state/actions';
import { CounterQueries } from '../state/counter.queries';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Select(CounterQueries.value2) value$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  updateValue(value: number): void {
    this.store.dispatch(new UpdateValue2(value));
  }
}
