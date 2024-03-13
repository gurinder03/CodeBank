import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsVariablesComponent } from './js-variables.component';

describe('JsVariablesComponent', () => {
  let component: JsVariablesComponent;
  let fixture: ComponentFixture<JsVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsVariablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
