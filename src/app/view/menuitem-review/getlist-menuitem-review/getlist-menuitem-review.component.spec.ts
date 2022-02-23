import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistMenuitemReviewComponent } from './getlist-menuitem-review.component';

describe('GetlistMenuitemReviewComponent', () => {
  let component: GetlistMenuitemReviewComponent;
  let fixture: ComponentFixture<GetlistMenuitemReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistMenuitemReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistMenuitemReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
