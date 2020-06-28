import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InnerChildComponent } from './inner-child.component';


describe('ChildComponent', () => {
  let component: InnerChildComponent;
  let fixture: ComponentFixture<InnerChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InnerChildComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
