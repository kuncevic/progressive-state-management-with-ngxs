import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsDataComponent } from './ngxs-labs-data.component';


describe('NgxsDataComponent', () => {
  let component: NgxsDataComponent;
  let fixture: ComponentFixture<NgxsDataComponent>;

  beforeEach(waitForAsync(() => {
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
