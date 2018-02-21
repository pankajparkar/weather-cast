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
  date: Date = new Date();
  selected = 0;

  constructor(
    private weatherService: WeatherService,
    private locationDetectorService: LocationDetectorService
  ) { }


  getWeatherData(ipData: any){
    //for now hardcoded Mumbai
    this.weatherService.getWeatherData('Mumbai', ipData.country_code).subscribe(
      weatherCast => this.weatherCast = weatherCast
    );
  }

  ngOnInit() {
    this.locationData = this.locationDetectorService.ipData;
    console.log(this.locationData);
    this.getWeatherData(this.locationData);
  }
}
