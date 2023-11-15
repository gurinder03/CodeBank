import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBlockInlineComponent } from './html-block-inline.component';

describe('HtmlBlockInlineComponent', () => {
  let component: HtmlBlockInlineComponent;
  let fixture: ComponentFixture<HtmlBlockInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlBlockInlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlBlockInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
