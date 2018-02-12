import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { LocationDetectorService } from '../services/location-detector.service';

@Component({
  selector: 'wc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weatherCast: any;

  constructor(
    private weatherService: WeatherService,
    private locationDetectorService: LocationDetectorService
  ) { }

  selected = 0;

  getWeatherData(data: any){
    this.weatherService.getWeatherData().subscribe(
      weatherCast => this.weatherCast = weatherCast
    );
  }

  ngOnInit() {
    this.getWeatherData(this.locationDetectorService.ipData);
  }
}
