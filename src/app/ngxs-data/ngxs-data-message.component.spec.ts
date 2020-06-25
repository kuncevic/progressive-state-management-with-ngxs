import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsDataMessageComponent } from './ngxs-data-message.component';

describe('NgxsDataMessageComponent', () => {
  let component: NgxsDataMessageComponent;
  let fixture: ComponentFixture<NgxsDataMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsDataMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsDataMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
