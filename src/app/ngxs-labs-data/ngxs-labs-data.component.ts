import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterDataState } from './state/counter.state';

@Component({
  selector: 'app-ngxs-labs-data',
  templateUrl: './ngxs-labs-data.component.html',
  styleUrls: ['./ngxs-labs-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxsDataComponent {
  constructor(public counter: CounterDataState) {}
}
