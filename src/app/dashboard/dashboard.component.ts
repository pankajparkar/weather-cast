import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'wc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weatherCast: any;

  constructor(private weatherService: WeatherService) { }

  selected = 0;

  ngOnInit() {
    this.weatherService.getWeatherData().subscribe(
      weatherCast => this.weatherCast = weatherCast
    );
  }
}
