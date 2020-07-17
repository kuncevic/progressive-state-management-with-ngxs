import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterDataState } from './state/counter.state';

@Component({
  selector: 'app-ngxs-data',
  templateUrl: './ngxs-data.component.html',
  styleUrls: ['./ngxs-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxsDataComponent {
  constructor(public counter: CounterDataState) {}
}
