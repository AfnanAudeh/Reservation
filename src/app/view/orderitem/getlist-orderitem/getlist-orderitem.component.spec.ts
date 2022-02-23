import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistOrderitemComponent } from './getlist-orderitem.component';

describe('GetlistOrderitemComponent', () => {
  let component: GetlistOrderitemComponent;
  let fixture: ComponentFixture<GetlistOrderitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistOrderitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistOrderitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
