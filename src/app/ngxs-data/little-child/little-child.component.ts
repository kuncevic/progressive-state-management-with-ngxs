import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterDataState } from '../state/counter.state';

@Component({
  selector: 'app-little-child',
  templateUrl: './little-child.component.html',
  styleUrls: ['./little-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LittleChildComponent {
  constructor(public counter: CounterDataState) {}
}
