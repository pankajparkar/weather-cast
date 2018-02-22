import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastHistoryComponent } from './weather-forecast-history.component';

describe('WeatherForecastHistoryComponent', () => {
  let component: WeatherForecastHistoryComponent;
  let fixture: ComponentFixture<WeatherForecastHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
