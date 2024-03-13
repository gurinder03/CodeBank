import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsAssignmentComponent } from './js-assignment.component';

describe('JsAssignmentComponent', () => {
  let component: JsAssignmentComponent;
  let fixture: ComponentFixture<JsAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
