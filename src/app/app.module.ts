import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherService } from './services/weather.service';
import { DropdownService } from './services/dropdown.service';
import { FiltersComponent } from './filters/filters.component';
import { LocationService } from './services/location.service';
import 'rxjs/add/operator/toPromise';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherForecastDetailsComponent } from './weather-forecast-details/weather-forecast-details.component';
import { WeatherForecastCityComponent } from './weather-forecast-city/weather-forecast-city.component';
import { WeatherForecastHistoryComponent } from './weather-forecast-history/weather-forecast-history.component';
import { FiltersService } from './filters/filters.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FiltersComponent,
    WeatherForecastComponent,
    WeatherForecastDetailsComponent,
    WeatherForecastCityComponent,
    WeatherForecastHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    WeatherService,
    DropdownService,
    LocationService,
    FiltersService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: (locationService: LocationService) => {
        return () => locationService.getIpData().toPromise();
      },
      deps: [LocationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [FiltersComponent]
})
export class AppModule { }
