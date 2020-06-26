import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
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
    NgxsDataModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
