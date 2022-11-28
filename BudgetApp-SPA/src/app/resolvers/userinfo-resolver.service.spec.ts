/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserinfoResolverService } from './userinfo-resolver.service';

describe('Service: UserinfoResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserinfoResolverService]
    });
  });

  it('should ...', inject([UserinfoResolverService], (service: UserinfoResolverService) => {
    expect(service).toBeTruthy();
  }));
});
