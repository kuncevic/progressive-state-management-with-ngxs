import { Component, OnInit } from '@angular/core';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor(public counter: CounterState) {}

  ngOnInit(): void {}

  setCounter(value: number): void {}
}
