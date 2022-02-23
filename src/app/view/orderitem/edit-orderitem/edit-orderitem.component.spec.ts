import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderitemComponent } from './edit-orderitem.component';

describe('EditOrderitemComponent', () => {
  let component: EditOrderitemComponent;
  let fixture: ComponentFixture<EditOrderitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrderitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrderitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
