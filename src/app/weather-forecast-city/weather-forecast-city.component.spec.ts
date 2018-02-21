import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastCityComponent } from './weather-forecast-city.component';

describe('WeatherForecastCityComponent', () => {
  let component: WeatherForecastCityComponent;
  let fixture: ComponentFixture<WeatherForecastCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
