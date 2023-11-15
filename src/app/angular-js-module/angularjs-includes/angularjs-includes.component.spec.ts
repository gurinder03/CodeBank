import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsIncludesComponent } from './angularjs-includes.component';

describe('AngularjsIncludesComponent', () => {
  let component: AngularjsIncludesComponent;
  let fixture: ComponentFixture<AngularjsIncludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsIncludesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
