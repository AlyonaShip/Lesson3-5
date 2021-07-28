import { TestBed } from '@angular/core/testing';

import { RequestProfilerService } from './request-profiler.service';

describe('RequestProfilerService', () => {
  let service: RequestProfilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestProfilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
