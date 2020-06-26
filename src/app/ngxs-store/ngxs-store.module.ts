import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ChildComponent } from './child/child.component';
import { NgxsComponent } from './ngxs-store.component';
import { ParentComponent } from './parent/parent.component';
import { CounterState } from './state/counter.state';



@NgModule({
  declarations: [ChildComponent, ParentComponent, NgxsComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([CounterState]),
  ],
})
export class NgxsStoreModule {}
