import { TestBed } from '@angular/core/testing';

import { AverageRateService } from './average-rate.service';

describe('AverageRateService', () => {
  let service: AverageRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AverageRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
