import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CounterStore } from './services/store.service';

@Component({
  selector: 'app-reactive-service',
  templateUrl: './reactive-service.component.html',
  styleUrls: ['./reactive-service.component.scss'],
})
export class ReactiveServiceComponent implements OnInit {
  sum$;
  constructor(private counterStore: CounterStore) {}

  ngOnInit(): void {
    this.sum$ = this.counterStore.state$.pipe(map((x) => x.sum));
  }

  resetMessage(): void {
    this.counterStore.reset();
  }
}
