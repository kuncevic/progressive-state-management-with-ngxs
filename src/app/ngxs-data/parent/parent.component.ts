import { Component, OnInit } from '@angular/core';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor(public counter: CounterState) {}

  ngOnInit(): void {}
}
