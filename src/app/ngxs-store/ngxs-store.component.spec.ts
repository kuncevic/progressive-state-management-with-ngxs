import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsComponent } from './ngxs-store.component';


describe('NgxsComponent', () => {
  let component: NgxsComponent;
  let fixture: ComponentFixture<NgxsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
