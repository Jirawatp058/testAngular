import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAndReviewComponent } from './confirm-and-review.component';

describe('ConfirmAndReviewComponent', () => {
  let component: ConfirmAndReviewComponent;
  let fixture: ComponentFixture<ConfirmAndReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAndReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAndReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
