import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsDataComponent } from './ngxs-labs-data/ngxs-labs-data.component';
import { NgxsComponent } from './ngxs-store/ngxs-store.component';
import { ReactiveServiceComponent } from './reactive-service/reactive-service.component';

const routes: Routes = [
  { path: '', redirectTo: '/reactive-service', pathMatch: 'full' },
  { path: 'reactive-service', component: ReactiveServiceComponent },
  { path: 'ngxs', component: NgxsComponent },
  { path: 'ngxs-labs-data', component: NgxsDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
