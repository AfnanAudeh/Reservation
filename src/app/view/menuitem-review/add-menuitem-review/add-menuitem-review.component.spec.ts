import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuitemReviewComponent } from './add-menuitem-review.component';

describe('AddMenuitemReviewComponent', () => {
  let component: AddMenuitemReviewComponent;
  let fixture: ComponentFixture<AddMenuitemReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenuitemReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuitemReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
