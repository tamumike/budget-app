/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllProjectsResolverService } from './all-projects-resolver.service';

describe('Service: AllProjectsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllProjectsResolverService]
    });
  });

  it('should ...', inject([AllProjectsResolverService], (service: AllProjectsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
