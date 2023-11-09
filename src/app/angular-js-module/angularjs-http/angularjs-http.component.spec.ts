import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsHttpComponent } from './angularjs-http.component';

describe('AngularjsHttpComponent', () => {
  let component: AngularjsHttpComponent;
  let fixture: ComponentFixture<AngularjsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
