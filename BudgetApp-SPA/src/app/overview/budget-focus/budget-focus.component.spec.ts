import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetFocusComponent } from './budget-focus.component';

describe('BudgetFocusComponent', () => {
  let component: BudgetFocusComponent;
  let fixture: ComponentFixture<BudgetFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetFocusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
