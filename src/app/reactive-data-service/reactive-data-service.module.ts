import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InnerChildComponent } from './inner-child/inner-child.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveServiceComponent } from './reactive-service.component';



@NgModule({
  declarations: [ParentComponent, ChildComponent, ReactiveServiceComponent, InnerChildComponent],
  imports: [
    CommonModule
  ]
})
export class ReactiveDataServiceModule { }
