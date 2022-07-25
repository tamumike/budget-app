/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AreaResolverService } from './area-resolver.service';

describe('Service: AreaResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AreaResolverService]
    });
  });

  it('should ...', inject([AreaResolverService], (service: AreaResolverService) => {
    expect(service).toBeTruthy();
  }));
});
