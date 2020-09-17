import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LittleChildComponent } from './little-child.component';


describe('ChildComponent', () => {
  let component: LittleChildComponent;
  let fixture: ComponentFixture<LittleChildComponent>;

  beforeEach(async(() => {
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
