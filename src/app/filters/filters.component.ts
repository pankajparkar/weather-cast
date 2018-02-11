import { Component, OnInit } from '@angular/core';

import { LocationDetectorService } from '../services/location-detector.service';
import { DropdownService } from '../services/dropdown.service';

@Component({
  selector: 'wc-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  cities: any;
  countries: any;

  constructor(
    private detectLocationService: LocationDetectorService,
    private dropdownService: DropdownService
  ) { }

  getLocation() {
    return this.detectLocationService.getIPData();
  }

  loadDropdownData() {
    this.getLocation().subscribe(location => {
      this.getCountries();
      this.getCities();
    });
  }

  ngOnInit() {
    this.loadDropdownData();
  }

  getCities() {
    this.dropdownService.getCities().subscribe(
      cities => this.cities = cities
    );
  }

  getCountries() {
    this.dropdownService.getCountries().subscribe(
      countries => this.countries = countries
    );
  }

}
