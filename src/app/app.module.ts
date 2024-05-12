import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { LocationPickerComponent } from './location-picker/location-picker.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LocationPickerComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
        LeafletModule,
        MatIcon,
        MatToolbar,
        MatButton,
        FormsModule,
        MatSlideToggleModule,
        FormsModule
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
