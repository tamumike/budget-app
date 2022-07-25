/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DxPivotGridService } from './dx-pivot-grid.service';

describe('Service: DxPivotGrid', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DxPivotGridService]
    });
  });

  it('should ...', inject([DxPivotGridService], (service: DxPivotGridService) => {
    expect(service).toBeTruthy();
  }));
});
