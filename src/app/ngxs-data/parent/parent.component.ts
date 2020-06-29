import { Component, OnInit } from '@angular/core';
import { CounterDataState } from '../state/counter.state';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor(public counter: CounterDataState) {}

  ngOnInit(): void {}
}
