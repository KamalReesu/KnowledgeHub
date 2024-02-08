import { TestBed } from '@angular/core/testing';

import { AngualrInfoService } from './angualr-info.service';

describe('AngualrInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngualrInfoService = TestBed.get(AngualrInfoService);
    expect(service).toBeTruthy();
  });
});
