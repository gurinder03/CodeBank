import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsValidationComponent } from './angularjs-validation.component';

describe('AngularjsValidationComponent', () => {
  let component: AngularjsValidationComponent;
  let fixture: ComponentFixture<AngularjsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
