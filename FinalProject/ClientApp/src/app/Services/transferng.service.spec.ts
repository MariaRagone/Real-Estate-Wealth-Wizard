import { TestBed } from '@angular/core/testing';

import { TransferngService } from './transferng.service';

describe('TransferngService', () => {
  let service: TransferngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
