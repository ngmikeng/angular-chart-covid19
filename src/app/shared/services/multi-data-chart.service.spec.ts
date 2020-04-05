import { TestBed } from '@angular/core/testing';

import { MultiDataChartService } from './multi-data-chart.service';

describe('MultiDataChartService', () => {
  let service: MultiDataChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiDataChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
