import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastDetailsComponent } from './weather-forecast-details.component';

describe('WeatherForecastDetailsComponent', () => {
  let component: WeatherForecastDetailsComponent;
  let fixture: ComponentFixture<WeatherForecastDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
