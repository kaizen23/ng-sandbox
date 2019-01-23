import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbSpinnerComponent } from './sb-spinner.component';

describe('SbSpinnerComponent', () => {
  let component: SbSpinnerComponent;
  let fixture: ComponentFixture<SbSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
