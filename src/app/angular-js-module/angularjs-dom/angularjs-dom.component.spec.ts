import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsDomComponent } from './angularjs-dom.component';

describe('AngularjsDomComponent', () => {
  let component: AngularjsDomComponent;
  let fixture: ComponentFixture<AngularjsDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsDomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
