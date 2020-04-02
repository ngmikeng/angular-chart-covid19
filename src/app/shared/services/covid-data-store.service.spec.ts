import { TestBed } from '@angular/core/testing';

import { CovidDataStoreService } from './covid-data-store.service';

describe('CovidDataStoreService', () => {
  let service: CovidDataStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidDataStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
