import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CounterStore } from '../services/store.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  value$;
  constructor(private counterStore: CounterStore) {}

  ngOnInit(): void {
    this.value$ = this.counterStore.state$.pipe(map((x) => x.value1));
  }

  increaseValue(value): void {
    this.counterStore.setValue1(value);
  }
  decreaseValue(value): void {
    this.counterStore.setValue1(value);
  }
}
