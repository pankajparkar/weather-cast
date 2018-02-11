import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const COUNTRY_API_ENDPOINT = 'https://battuta.medunes.net/api/country/all/';
const FORECAST_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'b1b15e88fa797225412429c1c50c122a1';
const OPEN_WEATHER_API_KEY= '7ec24178bacbeb8537ee4d6dbe6724db';
const FORECAST_API_URL =`${FORECAST_API_ENDPOINT}?appid=${OPEN_WEATHER_API_KEY}`;
const COUNTRY_API_URL =`${FORECAST_API_ENDPOINT}?key=${API_KEY}`;


@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherData(){
    let loc
    return this.httpClient.get(FORECAST_API_URL, {
        params: {q: 'London,us'}
      }
    );
  }

}
