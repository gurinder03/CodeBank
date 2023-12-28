import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSelectorsComponent } from './css-selectors.component';

describe('CssSelectorsComponent', () => {
  let component: CssSelectorsComponent;
  let fixture: ComponentFixture<CssSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssSelectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
