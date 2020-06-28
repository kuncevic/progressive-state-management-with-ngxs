import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CounterStore } from '../services/store.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  value$;
  constructor(private counterStore: CounterStore) {}

  ngOnInit(): void {
    this.value$ = this.counterStore.state$.pipe(map((x) => x.value2));
  }

  increaseValue(value): void {
    this.counterStore.setValue2(value);
  }
  decreaseValue(value): void {
    this.counterStore.setValue2(value);
  }
}
