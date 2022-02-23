import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCreditComponent } from './show-credit.component';

describe('ShowCreditComponent', () => {
  let component: ShowCreditComponent;
  let fixture: ComponentFixture<ShowCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
