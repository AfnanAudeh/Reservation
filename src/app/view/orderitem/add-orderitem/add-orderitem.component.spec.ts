import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderitemComponent } from './add-orderitem.component';

describe('AddOrderitemComponent', () => {
  let component: AddOrderitemComponent;
  let fixture: ComponentFixture<AddOrderitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrderitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
