import { TestBed } from '@angular/core/testing';

import { MortgageFormService } from './mortgage-form.service';

describe('MortgageFormService', () => {
  let service: MortgageFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
