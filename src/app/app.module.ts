import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherService } from './services/weather.service';
import { DropdownService } from './services/dropdown.service';
import { FiltersComponent } from './filters/filters.component';
import { LocationDetectorService } from './services/location-detector.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    DropdownService,
    LocationDetectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
