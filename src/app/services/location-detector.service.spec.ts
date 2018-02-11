import { TestBed, inject } from '@angular/core/testing';

import { LocationDetectorService } from './location-detector.service';

describe('LocationDetectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationDetectorService]
    });
  });

  it('should be created', inject([LocationDetectorService], (service: LocationDetectorService) => {
    expect(service).toBeTruthy();
  }));
});
