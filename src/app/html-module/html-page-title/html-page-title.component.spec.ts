import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPageTitleComponent } from './html-page-title.component';

describe('HtmlPageTitleComponent', () => {
  let component: HtmlPageTitleComponent;
  let fixture: ComponentFixture<HtmlPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlPageTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
