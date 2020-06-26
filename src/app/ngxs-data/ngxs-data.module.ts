import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import {
  NGXS_DATA_STORAGE_CONTAINER,
  NGXS_DATA_STORAGE_EXTENSION
} from '@ngxs-labs/data/storage';
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
    NgxsDataPluginModule.forRoot([
      NGXS_DATA_STORAGE_EXTENSION,
      NGXS_DATA_STORAGE_CONTAINER,
    ]),
    NgxsModule.forRoot([CounterState]),
  ],
})
export class NgxsDataModule {}
