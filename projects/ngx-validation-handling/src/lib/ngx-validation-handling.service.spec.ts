import { TestBed } from '@angular/core/testing';

import { NgxValidationHandlingService } from './ngx-validation-handling.service';

describe('NgxValidationHandlingService', () => {
  let service: NgxValidationHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxValidationHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
