import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbooutUsComponent } from './aboout-us.component';

describe('AbooutUsComponent', () => {
  let component: AbooutUsComponent;
  let fixture: ComponentFixture<AbooutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbooutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbooutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
