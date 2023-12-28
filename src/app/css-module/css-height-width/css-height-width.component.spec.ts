import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssHeightWidthComponent } from './css-height-width.component';

describe('CssHeightWidthComponent', () => {
  let component: CssHeightWidthComponent;
  let fixture: ComponentFixture<CssHeightWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssHeightWidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssHeightWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
