import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-weather-forecast-details',
  templateUrl: './weather-forecast-details.component.html',
  styleUrls: ['./weather-forecast-details.component.css']
})
export class WeatherForecastDetailsComponent implements OnInit {
  @Input() cast: any;
  constructor() { }

  ngOnInit() {
  }

}
