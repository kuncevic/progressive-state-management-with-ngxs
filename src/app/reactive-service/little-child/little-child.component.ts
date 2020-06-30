import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CounterStore } from '../services/store.service';

@Component({
  selector: 'app-little-child',
  templateUrl: './little-child.component.html',
  styleUrls: ['./little-child.component.scss'],
})
export class LittleChildComponent implements OnInit {
  value$;
  constructor(private counterStore: CounterStore) {}

  ngOnInit(): void {
    this.value$ = this.counterStore.state$.pipe(map((x) => x.value3));
  }

  updateValue(value: number): void {
    this.counterStore.setValue3(value);
  }
}
