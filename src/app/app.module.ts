import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//agregando el modulo pra el uso de mapas
import {AgmCoreModule}from '@agm/core';

import { AppComponent } from './app.component';
import { MymapComponent } from './mymap/mymap.component';
import {HttpModule}from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    MymapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBq5eMU9nkbYGR6nWEkkdH92zuSZCvROL8'}),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
