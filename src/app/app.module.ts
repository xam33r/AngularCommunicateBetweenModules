import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {provideRoutes} from '@angular/router';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { LAZY_TOKENS } from './lazyToken';
import { lazyArrayToObj, lazyMods } from './lazyMods';
import { LazyloadingService } from './lazyloading.service';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule
  ],
   providers: [{ provide: LAZY_TOKENS, useFactory: lazyArrayToObj }, LazyloadingService, provideRoutes(lazyMods)],
  bootstrap: [AppComponent]
})
export class AppModule { }
