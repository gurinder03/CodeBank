import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlResponsiveComponent } from './html-responsive.component';

describe('HtmlResponsiveComponent', () => {
  let component: HtmlResponsiveComponent;
  let fixture: ComponentFixture<HtmlResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
