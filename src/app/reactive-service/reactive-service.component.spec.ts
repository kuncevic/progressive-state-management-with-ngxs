import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveServiceComponent } from './reactive-service.component';


describe('ReactiveServiceComponent', () => {
  let component: ReactiveServiceComponent;
  let fixture: ComponentFixture<ReactiveServiceComponent>;

  beforeEach(async(() => {
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
