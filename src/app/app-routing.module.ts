import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsDataMessageComponent } from './ngxs-data/ngxs-data-message.component';
import { NgxsMessageComponent } from './ngxs/ngxs-message.component';
import { MessageComponent } from './reactive-data-service/message.component';

const routes: Routes = [
  { path: '', redirectTo: '/reactive-data-service', pathMatch: 'full' },
  { path: 'reactive-data-service', component: MessageComponent },
  { path: 'ngxs', component: NgxsMessageComponent },
  { path: 'ngxs-data', component: NgxsDataMessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
