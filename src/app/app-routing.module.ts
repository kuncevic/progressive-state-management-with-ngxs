import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './reactive-data-service/message.component';


const routes: Routes = [
  { path: '', redirectTo: '/reactive-data-service', pathMatch: 'full' },
  { path: 'reactive-data-service', component: MessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
