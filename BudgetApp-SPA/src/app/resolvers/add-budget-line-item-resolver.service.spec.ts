/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddBudgetLineItemResolverService } from './add-budget-line-item-resolver.service';

describe('Service: AddBudgetLineItemResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddBudgetLineItemResolverService]
    });
  });

  it('should ...', inject([AddBudgetLineItemResolverService], (service: AddBudgetLineItemResolverService) => {
    expect(service).toBeTruthy();
  }));
});
