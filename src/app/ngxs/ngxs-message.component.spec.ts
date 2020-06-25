import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsMessageComponent } from './ngxs-message.component';

describe('NgxsMessageComponent', () => {
  let component: NgxsMessageComponent;
  let fixture: ComponentFixture<NgxsMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
