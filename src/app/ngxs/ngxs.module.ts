import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageChildComponent } from './message-child/message-child.component';
import { MessageParentComponent } from './message-parent/message-parent.component';
import { NgxsMessageComponent } from './ngxs-message.component';



@NgModule({
  declarations: [MessageChildComponent, MessageParentComponent, NgxsMessageComponent],
  imports: [
    CommonModule
  ]
})
export class NgxsModule { }
