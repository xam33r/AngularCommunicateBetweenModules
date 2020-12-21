import { TestBed } from '@angular/core/testing';

import { LazyloadingService } from './lazyloading.service';

describe('LazyloadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyloadingService = TestBed.get(LazyloadingService);
    expect(service).toBeTruthy();
  });
});
