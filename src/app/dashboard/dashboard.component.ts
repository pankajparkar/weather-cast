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
  locationData: any;

  constructor(
    private weatherService: WeatherService,
    private locationDetectorService: LocationDetectorService
  ) { }

  selected = 0;

  getWeatherData(ipData: any){
    this.weatherService.getWeatherData(ipData.city, ipData.country_code).subscribe(
      weatherCast => this.weatherCast = weatherCast
    );
  }

  ngOnInit() {
    this.locationData = this.locationDetectorService.ipData;
    this.getWeatherData(this.locationData);
  }
}
