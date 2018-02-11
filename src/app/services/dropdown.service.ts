import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const COUNTRY_API_ENDPOINT = '//battuta.medunes.net/api/country/all/';
const CITY_API_ENDPOINT = '//battuta.medunes.net/api/city/fr/search/';
const COUNTRY_API_KEY = 'b1b15e88fa797225412429c1c50c122a1';

const COUNTRY_API_URL =`${COUNTRY_API_ENDPOINT}?key=${COUNTRY_API_KEY}`;
const CITY_API_URL =`${CITY_API_ENDPOINT}?key=${COUNTRY_API_KEY}`;

@Injectable()
export class DropdownService {

  constructor(private httpClient: HttpClient) { }

  getCities(){
    return this.httpClient.get(CITY_API_URL, {
      params: {
        region: 'pa'
      }
    })
  }

  getCountries(){
    return this.httpClient.get(COUNTRY_API_URL);
  }

}
