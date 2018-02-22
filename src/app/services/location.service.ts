import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const IPDATA_API_ENDPOINT = 'https://api.ipdata.co';

@Injectable()
export class LocationService {

  ipData: any;

  constructor(private httpClient: HttpClient) { }

  getIPData() {
    if (this.ipData)
      return Observable.of(this.ipData);
    else
      return this.httpClient.jsonp(IPDATA_API_ENDPOINT, 'callback')
        .do(ipData => this.ipData = ipData);
  }

}
