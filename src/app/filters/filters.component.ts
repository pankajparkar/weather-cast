import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import 'rxjs/add/operator/do';

import { LocationService } from '../services/location.service';
import { DropdownService } from '../services/dropdown.service';

@Component({
  selector: 'wc-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  cities: any;
  countries: any;
  states: any;
  locationData: any;

  constructor(
    private detectLocationService: LocationService,
    private dialogRef: MatDialogRef<FiltersComponent>,
    private dropdownService: DropdownService
  ) { }

  loadDropdownData(ipData: any) {
    this.getCountries();
    this.getRegions(ipData.country_code);
    this.getCities(ipData.country_code, ipData.region);
  }

  ngOnInit() {
    this.locationData = this.detectLocationService.ipData;
    this.loadDropdownData(this.locationData);
  }

  getCities(countryCode: string, regionName: string) {
    this.dropdownService.getCities(countryCode, regionName).subscribe(
      cities => {
        this.cities = cities;
        let currentCity = this.cities.filter(city => ~city.city.indexOf(this.locationData.city)) || [];
        if (currentCity.length) this.locationData.city = currentCity[0].city;
    });
  }

  getCountries() {
    this.dropdownService.getCountries().subscribe(
      countries => this.countries = countries
    );
  }

  getRegions(regionName: string) {
    this.dropdownService.getRegions(regionName).subscribe(
      states => {
        this.states = states;
        let currentRegion = this.states.filter(state => ~state.region.indexOf(this.locationData.region)) || [];
        if (currentRegion.length) this.locationData.region = currentRegion[0].region
      }
    );
  }

  close() {
    this.dialogRef.close();
  }

}
