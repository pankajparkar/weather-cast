import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { WeatherService } from '../services/weather.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'wc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  weatherCast: any;
  locationData: any;
  date: Date = new Date();
  selected = 0;
  locationSubscription: Subscription;

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
  ) { }


  getWeatherData(ipData: any) {
    this.weatherService.getWeatherData(ipData.city, ipData.country_code).subscribe(
      weatherCast => this.weatherCast = weatherCast
    );
  }

  ngOnInit() {
    this.locationSubscription = this.locationService.getIpData().subscribe(ipData => {
      this.locationData = this.locationService.ipData;
      this.getWeatherData(this.locationData);
    });
  }

  ngOnDestroy() {
    this.locationSubscription.unsubscribe();
  }
}
