import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsConstComponent } from './js-const.component';

describe('JsConstComponent', () => {
  let component: JsConstComponent;
  let fixture: ComponentFixture<JsConstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsConstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
