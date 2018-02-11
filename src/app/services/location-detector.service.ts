import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const IPDATA_API_ENDPOINT = 'https://api.ipdata.co/';

@Injectable()
export class LocationDetectorService {

  constructor(private httpClient: HttpClient) { }

  getIPData() {
    return this.httpClient.get(IPDATA_API_ENDPOINT);
  }

}
