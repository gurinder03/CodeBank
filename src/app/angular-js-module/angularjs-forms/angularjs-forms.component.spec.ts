import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsFormsComponent } from './angularjs-forms.component';

describe('AngularjsFormsComponent', () => {
  let component: AngularjsFormsComponent;
  let fixture: ComponentFixture<AngularjsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
