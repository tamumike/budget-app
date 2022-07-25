/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KpiResolverService } from './kpi-resolver.service';

describe('Service: KpiResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KpiResolverService]
    });
  });

  it('should ...', inject([KpiResolverService], (service: KpiResolverService) => {
    expect(service).toBeTruthy();
  }));
});
