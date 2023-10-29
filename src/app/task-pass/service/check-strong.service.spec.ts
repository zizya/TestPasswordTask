import { TestBed } from '@angular/core/testing';

import { CheckStrongService } from './check-strong.service';

describe('CheckStrongService', () => {
  let service: CheckStrongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckStrongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
