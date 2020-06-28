import { Component, OnInit } from '@angular/core';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-little-child',
  templateUrl: './little-child.component.html',
  styleUrls: ['./little-child.component.scss'],
})
export class LittleChildComponent implements OnInit {
  constructor(public counter: CounterState) {}

  ngOnInit(): void {}
}
