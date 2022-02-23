import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenuitemReviewComponent } from './show-menuitem-review.component';

describe('ShowMenuitemReviewComponent', () => {
  let component: ShowMenuitemReviewComponent;
  let fixture: ComponentFixture<ShowMenuitemReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMenuitemReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenuitemReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
