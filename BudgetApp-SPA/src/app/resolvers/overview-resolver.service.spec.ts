/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OverviewResolverService } from './overview-resolver.service';

describe('Service: OverviewResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OverviewResolverService]
    });
  });

  it('should ...', inject([OverviewResolverService], (service: OverviewResolverService) => {
    expect(service).toBeTruthy();
  }));
});
