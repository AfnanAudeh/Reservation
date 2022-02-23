import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrderitemComponent } from './show-orderitem.component';

describe('ShowOrderitemComponent', () => {
  let component: ShowOrderitemComponent;
  let fixture: ComponentFixture<ShowOrderitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOrderitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrderitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
