import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LittleChildComponent } from './little-child.component';


describe('ChildComponent', () => {
  let component: LittleChildComponent;
  let fixture: ComponentFixture<LittleChildComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LittleChildComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
