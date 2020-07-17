import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ResetCounter } from './state/actions';
import { CounterQueries } from './state/counter.queries';

@Component({
  selector: 'app-ngxs',
  templateUrl: './ngxs-store.component.html',
  styleUrls: ['./ngxs-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxsComponent implements OnInit {
  @Select(CounterQueries.sum) value$: Observable<number>;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  resetCounter(): void {
    this.store.dispatch(new ResetCounter());
  }
}
