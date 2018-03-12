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
import { BrowserModule } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let weatherService: WeatherService;
  let locationService: LocationService;

  beforeEach(() => {
    let stubLocationService = {
      getIpData: () => Observable.of(ipData),
      ipData: ipData,
      ipData$: new BehaviorSubject<any>(ipData)
    }

    TestBed.configureTestingModule({
      imports: [AppModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: LocationService, useValue: stubLocationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);

    component = fixture.componentInstance;
  });

  it('Intially location data should have loaded', () => {
    //after component loaded
    fixture.detectChanges();
    debugger;
    expect(component.locationData).toBeDefined();

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
