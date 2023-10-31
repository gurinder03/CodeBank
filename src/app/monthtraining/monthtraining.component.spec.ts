import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthtrainingComponent } from './monthtraining.component';

describe('MonthtrainingComponent', () => {
  let component: MonthtrainingComponent;
  let fixture: ComponentFixture<MonthtrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthtrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
