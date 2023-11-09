import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsModelComponent } from './angularjs-model.component';

describe('AngularjsModelComponent', () => {
  let component: AngularjsModelComponent;
  let fixture: ComponentFixture<AngularjsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
