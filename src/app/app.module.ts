import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import {
  NGXS_DATA_STORAGE_CONTAINER,
  NGXS_DATA_STORAGE_EXTENSION
} from '@ngxs-labs/data/storage';
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
      selectorOptions: { injectContainerState: false },
    }),
    NgxsDataPluginModule.forRoot([
      NGXS_DATA_STORAGE_EXTENSION,
      NGXS_DATA_STORAGE_CONTAINER,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
