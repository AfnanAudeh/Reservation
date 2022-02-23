import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuitemReviewComponent } from './edit-menuitem-review.component';

describe('EditMenuitemReviewComponent', () => {
  let component: EditMenuitemReviewComponent;
  let fixture: ComponentFixture<EditMenuitemReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMenuitemReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuitemReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
