import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsDataModule } from './ngxs-data/ngxs-data.module';
import { NgxsStoreModule } from './ngxs-store/ngxs-store.module';
import { ReactiveServiceModule } from './reactive-service/reactive-service.module';
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveServiceModule,
    NgxsStoreModule,
    NgxsDataModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
      selectorOptions: { injectContainerState: false },
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsDataPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
