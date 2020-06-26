import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageComponent } from './child/child.component';
import { NgxsComponent } from './ngxs-store.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [MessageComponent, ParentComponent, NgxsComponent],
  imports: [
    CommonModule
  ]
})
export class NgxsStoreModule { }
