/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailBudgetLineItemResolverService } from './detail-budget-line-item-resolver.service';

describe('Service: DetailBudgetLineItemResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailBudgetLineItemResolverService]
    });
  });

  it('should ...', inject([DetailBudgetLineItemResolverService], (service: DetailBudgetLineItemResolverService) => {
    expect(service).toBeTruthy();
  }));
});
