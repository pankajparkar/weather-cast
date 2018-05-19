import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

const IPDATA_API_ENDPOINT = 'https://api.ipdata.co';
const FALLBACK_CITY = 'Mumbai';

@Injectable()
export class LocationService {

  private ipData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  ipData: any;

  constructor(private httpClient: HttpClient) { }

  ipDataGetter() {
    return this.ipData$.asObservable();
  }

  ipDataSetter(changedIpData) {
    this.ipData$.next(changedIpData);
  }

  getIPData() {
    if (this.ipData) {
      return of(this.ipData);
    } else {
      return this.httpClient.jsonp(IPDATA_API_ENDPOINT, 'callback')
        .pipe(
          tap((ipData: any) => {
            // TODO fallback to be removed
            if (ipData.city === 'Ghatkopar') {
              ipData.city = FALLBACK_CITY;
            }
            this.ipData$.next(ipData);
            this.ipData = ipData;
          })
        )
    }
  }

}
