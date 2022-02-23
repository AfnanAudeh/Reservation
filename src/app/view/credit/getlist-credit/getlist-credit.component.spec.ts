import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistCreditComponent } from './getlist-credit.component';

describe('GetlistCreditComponent', () => {
  let component: GetlistCreditComponent;
  let fixture: ComponentFixture<GetlistCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
