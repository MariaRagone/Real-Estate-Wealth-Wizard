import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageFormComponent } from './mortgage-form.component';

describe('MortgageFormComponent', () => {
  let component: MortgageFormComponent;
  let fixture: ComponentFixture<MortgageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageFormComponent]
    });
    fixture = TestBed.createComponent(MortgageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
