import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsExpressionComponent } from './angularjs-expression.component';

describe('AngularjsExpressionComponent', () => {
  let component: AngularjsExpressionComponent;
  let fixture: ComponentFixture<AngularjsExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsExpressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
