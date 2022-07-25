/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UnitResolverService } from './unit-resolver.service';

describe('Service: UnitResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitResolverService]
    });
  });

  it('should ...', inject([UnitResolverService], (service: UnitResolverService) => {
    expect(service).toBeTruthy();
  }));
});
