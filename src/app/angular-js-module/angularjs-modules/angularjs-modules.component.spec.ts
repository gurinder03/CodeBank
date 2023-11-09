import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsModulesComponent } from './angularjs-modules.component';

describe('AngularjsModulesComponent', () => {
  let component: AngularjsModulesComponent;
  let fixture: ComponentFixture<AngularjsModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
