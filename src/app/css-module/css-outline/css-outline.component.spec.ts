import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssOutlineComponent } from './css-outline.component';

describe('CssOutlineComponent', () => {
  let component: CssOutlineComponent;
  let fixture: ComponentFixture<CssOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssOutlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
