import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageChildComponent } from './message-child/message-child.component';
import { MessageParentComponent } from './message-parent/message-parent.component';
import { NgxsDataMessageComponent } from './ngxs-data-message.component';



@NgModule({
  declarations: [MessageChildComponent, MessageParentComponent, NgxsDataMessageComponent, MessageParentComponent],
  imports: [
    CommonModule
  ]
})
export class NgxsDataModule { }
