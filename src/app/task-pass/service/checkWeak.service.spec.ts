import { TestBed } from '@angular/core/testing';

import { CheckWeakService } from './checkWeak.service';

describe('CheckpassService', () => {
  let service: CheckWeakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckWeakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
