import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbsFormComponent } from './wbs-form.component';

describe('WbsFormComponent', () => {
  let component: WbsFormComponent;
  let fixture: ComponentFixture<WbsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
