import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsDatabindingComponent } from './angularjs-databinding.component';

describe('AngularjsDatabindingComponent', () => {
  let component: AngularjsDatabindingComponent;
  let fixture: ComponentFixture<AngularjsDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsDatabindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
