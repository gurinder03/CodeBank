import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlParagraphsComponent } from './html-paragraphs.component';

describe('HtmlParagraphsComponent', () => {
  let component: HtmlParagraphsComponent;
  let fixture: ComponentFixture<HtmlParagraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlParagraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlParagraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
