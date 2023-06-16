import { TestBed } from '@angular/core/testing';

import { DbimporterService } from './dbimporter.service';

describe('DbimporterService', () => {
  let service: DbimporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbimporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
