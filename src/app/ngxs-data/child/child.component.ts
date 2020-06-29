import { Component, OnInit } from '@angular/core';
import { CounterDataState } from '../state/counter.state';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor(public counter: CounterDataState) {}

  ngOnInit(): void {}

  setCounter(value: number): void {}
}
