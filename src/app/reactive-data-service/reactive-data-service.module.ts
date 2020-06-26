import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveServiceComponent } from './reactive-service.component';



@NgModule({
  declarations: [ParentComponent, ChildComponent, ReactiveServiceComponent],
  imports: [
    CommonModule
  ]
})
export class ReactiveDataServiceModule { }
