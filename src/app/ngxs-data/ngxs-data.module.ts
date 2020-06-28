import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ChildComponent } from './child/child.component';
import { NgxsDataComponent } from './ngxs-data.component';
import { ParentComponent } from './parent/parent.component';
import { CounterState } from './state/counter.state';


@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    NgxsDataComponent,
    ParentComponent,
  ],
  imports: [
    CommonModule,
    NgxsModule.forRoot([CounterState]),
  ],
})
export class NgxsDataModule {}
