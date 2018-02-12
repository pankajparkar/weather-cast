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
import { LocationDetectorService } from './services/location-detector.service';
import 'rxjs/add/operator/toPromise';

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
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    WeatherService,
    DropdownService,
    LocationDetectorService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: (locationDetectorService: LocationDetectorService) => {
        return () => locationDetectorService.getIPData().toPromise()
      },
      deps: [LocationDetectorService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [FiltersComponent]
})
export class AppModule { }
