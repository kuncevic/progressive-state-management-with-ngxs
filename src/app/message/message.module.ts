import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageParentComponent } from './message-parent/message-parent.component';
import { MessageChildComponent } from './message-child/message-child.component';
import { MessageComponent } from './message.component';



@NgModule({
  declarations: [MessageParentComponent, MessageChildComponent, MessageComponent],
  imports: [
    CommonModule
  ]
})
export class MessageModule { }
