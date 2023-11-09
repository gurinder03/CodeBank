import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlMetaTagsComponent } from './html-meta-tags.component';

describe('HtmlMetaTagsComponent', () => {
  let component: HtmlMetaTagsComponent;
  let fixture: ComponentFixture<HtmlMetaTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlMetaTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlMetaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
