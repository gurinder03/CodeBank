import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsScopesComponent } from './angularjs-scopes.component';

describe('AngularjsScopesComponent', () => {
  let component: AngularjsScopesComponent;
  let fixture: ComponentFixture<AngularjsScopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsScopesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsScopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
