import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CounterStore } from './services/store.service';

@Component({
  selector: 'app-reactive-service',
  templateUrl: './reactive-service.component.html',
  styleUrls: ['./reactive-service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveServiceComponent implements OnInit {
  sum$: Observable<number>;
  constructor(private counterStore: CounterStore) {}

  ngOnInit(): void {
    this.sum$ = this.counterStore.state$.pipe(map((x) => x.value1 + x.value2 + x.value3));
  }

  reset(): void {
    this.counterStore.reset();
  }
}
