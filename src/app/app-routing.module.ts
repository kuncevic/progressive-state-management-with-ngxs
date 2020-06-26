import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsDataComponent } from './ngxs-data/ngxs-data.component';
import { NgxsComponent } from './ngxs/ngxs.component';
import { ReactiveServiceComponent } from './reactive-data-service/reactive-service.component';

const routes: Routes = [
  { path: '', redirectTo: '/reactive-data-service', pathMatch: 'full' },
  { path: 'reactive-data-service', component: ReactiveServiceComponent },
  { path: 'ngxs', component: NgxsComponent },
  { path: 'ngxs-data', component: NgxsDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
