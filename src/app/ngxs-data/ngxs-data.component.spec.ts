import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsDataComponent } from './ngxs-data.component';


describe('NgxsDataComponent', () => {
  let component: NgxsDataComponent;
  let fixture: ComponentFixture<NgxsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
