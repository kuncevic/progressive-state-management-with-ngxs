import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveServiceComponent } from './reactive-service.component';


describe('ReactiveServiceComponent', () => {
  let component: ReactiveServiceComponent;
  let fixture: ComponentFixture<ReactiveServiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
