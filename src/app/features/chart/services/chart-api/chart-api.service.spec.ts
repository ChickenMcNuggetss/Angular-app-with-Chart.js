import { TestBed } from '@angular/core/testing';

import { ChartApiService } from './chart-api.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ChartApiService', () => {
  let service: ChartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ChartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
