import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsDataModule } from './ngxs-data/ngxs-data.module';
import { NgxsModule } from './ngxs/ngxs.module';
import { ReactiveDataServiceModule } from './reactive-data-service/message.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveDataServiceModule,
    NgxsModule,
    NgxsDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
