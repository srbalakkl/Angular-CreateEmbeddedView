import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import {WidgetStateService} from "./widget-state.service";
import {WidgetActionsService} from "./widget-actions.service";

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WidgetStateService,WidgetActionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
