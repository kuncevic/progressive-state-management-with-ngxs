import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageComponent } from './child/child.component';
import { NgxsDataComponent } from './ngxs-data.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [MessageComponent, ParentComponent, NgxsDataComponent, ParentComponent],
  imports: [
    CommonModule
  ]
})
export class NgxsDataModule { }
