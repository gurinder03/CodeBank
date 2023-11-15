import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsEventsComponent } from './angularjs-events.component';

describe('AngularjsEventsComponent', () => {
  let component: AngularjsEventsComponent;
  let fixture: ComponentFixture<AngularjsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
