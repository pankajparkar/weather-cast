import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-weather-forecast-city',
  templateUrl: './weather-forecast-city.component.html',
  styleUrls: ['./weather-forecast-city.component.css']
})
export class WeatherForecastCityComponent implements OnInit {
  @Input() cast: any;
  constructor() { }

  ngOnInit() {
  }

}
