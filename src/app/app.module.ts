import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsDataModule } from './ngxs-data/ngxs-data.module';
import { NgxsStoreModule } from './ngxs-store/ngxs-store.module';
import { ReactiveDataServiceModule } from './reactive-data-service/reactive-data-service.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveDataServiceModule,
    NgxsStoreModule,
    NgxsDataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
