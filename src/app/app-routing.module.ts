import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageParentComponent } from './message/message-parent/message-parent.component';


const routes: Routes = [
  { path: '', redirectTo: '/message', pathMatch: 'full' },
  { path: 'message', component: MessageParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
