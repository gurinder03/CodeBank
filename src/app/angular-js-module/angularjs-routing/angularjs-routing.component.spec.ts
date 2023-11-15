import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsRoutingComponent } from './angularjs-routing.component';

describe('AngularjsRoutingComponent', () => {
  let component: AngularjsRoutingComponent;
  let fixture: ComponentFixture<AngularjsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
