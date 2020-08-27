import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-reactive-service',
  templateUrl: './reactive-service.component.html',
  styleUrls: ['./reactive-service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveServiceComponent implements OnInit {
  sum$: Observable<number>;
  constructor(private counterStore: CounterService) {}

  ngOnInit(): void {
    this.sum$ = this.counterStore.sum();
  }

  reset(): void {
    this.counterStore.resetState();
  }
}
