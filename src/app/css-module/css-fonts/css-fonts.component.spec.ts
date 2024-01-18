import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFontsComponent } from './css-fonts.component';

describe('CssFontsComponent', () => {
  let component: CssFontsComponent;
  let fixture: ComponentFixture<CssFontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssFontsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssFontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
