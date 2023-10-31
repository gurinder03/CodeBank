import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeektrainingComponent } from './weektraining.component';

describe('WeektrainingComponent', () => {
  let component: WeektrainingComponent;
  let fixture: ComponentFixture<WeektrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeektrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeektrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
