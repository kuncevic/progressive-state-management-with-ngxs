import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterDataState } from '../state/counter.state';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  constructor(public counter: CounterDataState) {}
}
