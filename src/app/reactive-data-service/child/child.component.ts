import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CounterStore } from '../services/store.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  number$;
  constructor(private counterStore: CounterStore) {}

  ngOnInit(): void {
    this.number$ = this.counterStore.state$.pipe(map((x) => x.number));
  }

  setCounter(value: number): void {
    this.counterStore.setCounter(value);
  }
}
