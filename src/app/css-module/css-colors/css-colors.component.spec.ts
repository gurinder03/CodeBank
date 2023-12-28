import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssColorsComponent } from './css-colors.component';

describe('CssColorsComponent', () => {
  let component: CssColorsComponent;
  let fixture: ComponentFixture<CssColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssColorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
