import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsDirectivesComponent } from './angularjs-directives.component';

describe('AngularjsDirectivesComponent', () => {
  let component: AngularjsDirectivesComponent;
  let fixture: ComponentFixture<AngularjsDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
