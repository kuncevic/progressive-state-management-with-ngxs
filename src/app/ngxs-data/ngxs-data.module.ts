import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ChildComponent } from './child/child.component';
import { LittleChildComponent } from './little-child/little-child.component';
import { NgxsDataComponent } from './ngxs-data.component';
import { ParentComponent } from './parent/parent.component';
import { CounterDataState } from './state/counter.state';


@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    NgxsDataComponent,
    ParentComponent,
    LittleChildComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forRoot([CounterDataState]),
  ],
})
export class NgxsDataModule {}
