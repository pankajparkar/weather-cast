import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'wc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weatherCast: any;
  locationData: any;
  date: Date = new Date();
  selected = 0;

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
  ) { }


  getWeatherData(ipData: any){
    this.weatherService.getWeatherData(ipData.city, ipData.country_code).subscribe(
      weatherCast => this.weatherCast = weatherCast
    );
  }

  ngOnInit() {
    this.locationData = this.locationService.ipData;
    console.log(this.locationData);
    this.getWeatherData(this.locationData);
  }
}
