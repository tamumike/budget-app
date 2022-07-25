/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WbsDictionaryResolverService } from './wbs-dictionary-resolver.service';

describe('Service: WbsDictionaryResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WbsDictionaryResolverService]
    });
  });

  it('should ...', inject([WbsDictionaryResolverService], (service: WbsDictionaryResolverService) => {
    expect(service).toBeTruthy();
  }));
});
