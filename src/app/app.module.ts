import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { flatfileAdapterModule } from '@flatfile/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlatfileAdapterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
