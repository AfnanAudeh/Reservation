import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistCartItemsComponent } from './getlist-cart-items.component';

describe('GetlistCartItemsComponent', () => {
  let component: GetlistCartItemsComponent;
  let fixture: ComponentFixture<GetlistCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistCartItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
