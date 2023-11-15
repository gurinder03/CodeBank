import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsSelectComponent } from './angularjs-select.component';

describe('AngularjsSelectComponent', () => {
  let component: AngularjsSelectComponent;
  let fixture: ComponentFixture<AngularjsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
