import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBudgetLineItemComponent } from './add-budget-line-item.component';

describe('AddBudgetLineItemComponent', () => {
  let component: AddBudgetLineItemComponent;
  let fixture: ComponentFixture<AddBudgetLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBudgetLineItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBudgetLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
