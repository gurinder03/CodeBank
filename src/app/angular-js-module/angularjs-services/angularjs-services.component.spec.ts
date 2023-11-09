import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsServicesComponent } from './angularjs-services.component';

describe('AngularjsServicesComponent', () => {
  let component: AngularjsServicesComponent;
  let fixture: ComponentFixture<AngularjsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
