import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsApiComponent } from './angularjs-api.component';

describe('AngularjsApiComponent', () => {
  let component: AngularjsApiComponent;
  let fixture: ComponentFixture<AngularjsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
