import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageParentComponent } from './message-parent/message-parent.component';
import { MessageChildComponent } from './message-child/message-child.component';



@NgModule({
  declarations: [MessageParentComponent, MessageChildComponent],
  imports: [
    CommonModule
  ]
})
export class MessageModule { }
