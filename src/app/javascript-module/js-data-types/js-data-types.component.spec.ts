import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDataTypesComponent } from './js-data-types.component';

describe('JsDataTypesComponent', () => {
  let component: JsDataTypesComponent;
  let fixture: ComponentFixture<JsDataTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDataTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsDataTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
