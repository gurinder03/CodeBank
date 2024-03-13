import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsLetComponent } from './js-let.component';

describe('JsLetComponent', () => {
  let component: JsLetComponent;
  let fixture: ComponentFixture<JsLetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsLetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
