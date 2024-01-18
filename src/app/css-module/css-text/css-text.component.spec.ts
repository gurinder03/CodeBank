import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTextComponent } from './css-text.component';

describe('CssTextComponent', () => {
  let component: CssTextComponent;
  let fixture: ComponentFixture<CssTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
