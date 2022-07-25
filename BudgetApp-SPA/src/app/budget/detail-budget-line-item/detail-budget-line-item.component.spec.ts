import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBudgetLineItemComponent } from './detail-budget-line-item.component';

describe('DetailBudgetLineItemComponent', () => {
  let component: DetailBudgetLineItemComponent;
  let fixture: ComponentFixture<DetailBudgetLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBudgetLineItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBudgetLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
