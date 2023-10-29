import { TestBed } from '@angular/core/testing';

import { CheckMediumService } from './check-medium.service';

describe('CheckMediumService', () => {
  let service: CheckMediumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckMediumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
