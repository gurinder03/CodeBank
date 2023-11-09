import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLinksComponent } from './html-links.component';

describe('HtmlLinksComponent', () => {
  let component: HtmlLinksComponent;
  let fixture: ComponentFixture<HtmlLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
