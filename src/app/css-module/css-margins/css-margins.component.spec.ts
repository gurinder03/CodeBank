import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssMarginsComponent } from './css-margins.component';

describe('CssMarginsComponent', () => {
  let component: CssMarginsComponent;
  let fixture: ComponentFixture<CssMarginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssMarginsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssMarginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
