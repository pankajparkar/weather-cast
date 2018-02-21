import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  @Input() weather: any;
  @Input() date: any;

  constructor() { }

  ngOnInit() {
  }

}
