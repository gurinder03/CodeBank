import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsArithmeticComponent } from './js-arithmetic.component';

describe('JsArithmeticComponent', () => {
  let component: JsArithmeticComponent;
  let fixture: ComponentFixture<JsArithmeticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsArithmeticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsArithmeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
