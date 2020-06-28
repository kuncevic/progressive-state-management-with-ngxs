import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CounterStore } from '../services/store.service';

@Component({
  selector: 'app-inner-child',
  templateUrl: './inner-child.component.html',
  styleUrls: ['./inner-child.component.scss'],
})
export class InnerChildComponent implements OnInit {
  value$;
  constructor(private counterStore: CounterStore) {}

  ngOnInit(): void {
    this.value$ = this.counterStore.state$.pipe(map((x) => x.value3));
  }

  increaseValue(value): void {
    this.counterStore.setValue3(value);
  }
  decreaseValue(value): void {
    this.counterStore.setValue3(value);
  }
}
