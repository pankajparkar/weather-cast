import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

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
  states: any;

  constructor(
    private detectLocationService: LocationDetectorService,
    private dialogRef: MatDialogRef<FiltersComponent>,
    private dropdownService: DropdownService
  ) { }

  getLocation() {
    return this.detectLocationService.getIPData();
  }

  loadDropdownData() {
    this.getLocation().subscribe((ipData:any) => {
      this.getCountries();
      this.getRegions(ipData.country_code);
      this.getCities(ipData.country_code, ipData.region);
    });
  }

  ngOnInit() {
    this.loadDropdownData();
  }

  getCities(countryCode: string, regionName: string) {
    this.dropdownService.getCities(countryCode, regionName).subscribe(
      cities => this.cities = cities
    );
  }

  getCountries() {
    this.dropdownService.getCountries().subscribe(
      countries => this.countries = countries
    );
  }

  getRegions(regionName: string) {
    this.dropdownService.getRegions(regionName).subscribe(
      states => this.states = states
    );
  }

  close(){
    this.dialogRef.close();
  }

}
