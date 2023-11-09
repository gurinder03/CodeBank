import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsControllersComponent } from './angularjs-controllers.component';

describe('AngularjsControllersComponent', () => {
  let component: AngularjsControllersComponent;
  let fixture: ComponentFixture<AngularjsControllersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsControllersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
