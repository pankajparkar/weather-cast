import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DashboardComponent } from './dashboard.component';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { AppModule } from '../app.module';
import { ipData, weatherData } from '../../test/mock-data'

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {

    let weatherServiceMock = class {
      getWeatherData() {
        return Observable.of(weatherData);
      }
    };
    let locationServiceMock = class {
      getIPData() {
        return Observable.of(ipData);
      }
    };

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [
        { provide: WeatherService, useClass: weatherServiceMock },
        { provide: LocationService, useClass: locationServiceMock }
      ],
      // declarations: [DashboardComponent],
      imports: [AppModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('Intially location data should have loaded', () => {
    debugger
    //after component loaded
    fixture.detectChanges();
    expect(component.locationData).toBeUndefined();

  });

  // it('Setting enabled to true enables the submit button', () => {
  //   component.enabled = true;
  //   fixture.detectChanges();
  //   expect(submitEl.nativeElement.disabled).toBeFalsy();
  // });

  // it('Entering email and password emits loggedIn event', () => {
  //   let user: User;
  //   loginEl.nativeElement.value = "test@example.com";
  //   passwordEl.nativeElement.value = "123456";

  //   // Subscribe to the Observable and store the user in a local variable.
  //   component.loggedIn.subscribe((value) => user = value);

  //   // This sync emits the event and the subscribe callback gets executed above
  //   submitEl.triggerEventHandler('click', null);

  //   // Now we can check to make sure the emitted value is correct
  //   expect(user.email).toBe("test@example.com");
  //   expect(user.password).toBe("123456");
  // });
});
