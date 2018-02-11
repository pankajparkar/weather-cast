import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const COUNTRY_API_ENDPOINT = 'https://battuta.medunes.net/api/country/all/';
const FORECAST_API_ENDPOINT = 'https://cors-anywhere.herokuapp.com/samples.openweathermap.org/data/2.5/forecast';
const API_KEY = 'b1b15e88fa797225412429c1c50c122a1';
const FORECAST_API_URL =`${FORECAST_API_ENDPOINT}?appid=${API_KEY}`;
const COUNTRY_API_URL =`${FORECAST_API_ENDPOINT}?key=${API_KEY}`;


@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherData(){
    let loc
    return this.httpClient.get(FORECAST_API_URL, 
      {
        params: {q: 'London,us'},
        headers: new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest')
      });
  }

}
