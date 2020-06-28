import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ChildComponent } from './child/child.component';
import { LittleChildComponent } from './little-child/little-child.component';
import { NgxsComponent } from './ngxs-store.component';
import { ParentComponent } from './parent/parent.component';
import { CounterState } from './state/counter.state';



@NgModule({
  declarations: [ChildComponent, ParentComponent, NgxsComponent, LittleChildComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([CounterState]),
  ],
})
export class NgxsStoreModule {}
