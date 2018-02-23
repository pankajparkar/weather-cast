import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

const IPDATA_API_ENDPOINT = 'https://api.ipdata.co';
const FALLBACK_CITY: string = 'Mumbai';

@Injectable()
export class LocationService {

  private ipData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  ipData: any;

  constructor(private httpClient: HttpClient) { }

  getIpData(){
    return this.ipData$.asObservable();
  }

  setIpData(changedIpData){
    this.ipData$.next(changedIpData);
  }

  getIPData() {
    if (this.ipData)
      return Observable.of(this.ipData);
    else
      return this.httpClient.jsonp(IPDATA_API_ENDPOINT, 'callback')
        .do((ipData: any) => {
          //TODO fallback to be removed
          if(ipData.city === 'Ghatkopar') ipData.city = FALLBACK_CITY;
          this.ipData$.next(ipData);

          this.ipData = ipData;
        });
  }

}
