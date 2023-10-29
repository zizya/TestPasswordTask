import { TestBed } from '@angular/core/testing';

import { Less8Service } from './less8.service';

describe('Less8Service', () => {
  let service: Less8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Less8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
