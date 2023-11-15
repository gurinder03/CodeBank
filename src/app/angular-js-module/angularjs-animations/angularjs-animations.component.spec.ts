import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsAnimationsComponent } from './angularjs-animations.component';

describe('AngularjsAnimationsComponent', () => {
  let component: AngularjsAnimationsComponent;
  let fixture: ComponentFixture<AngularjsAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsAnimationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
