import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsWhereToComponent } from './js-where-to.component';

describe('JsWhereToComponent', () => {
  let component: JsWhereToComponent;
  let fixture: ComponentFixture<JsWhereToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsWhereToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsWhereToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
