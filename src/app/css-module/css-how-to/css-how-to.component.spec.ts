import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssHowToComponent } from './css-how-to.component';

describe('CssHowToComponent', () => {
  let component: CssHowToComponent;
  let fixture: ComponentFixture<CssHowToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssHowToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssHowToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
