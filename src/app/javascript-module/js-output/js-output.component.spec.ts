import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsOutputComponent } from './js-output.component';

describe('JsOutputComponent', () => {
  let component: JsOutputComponent;
  let fixture: ComponentFixture<JsOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
