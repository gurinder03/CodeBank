import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsStatementsComponent } from './js-statements.component';

describe('JsStatementsComponent', () => {
  let component: JsStatementsComponent;
  let fixture: ComponentFixture<JsStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsStatementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
