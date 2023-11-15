import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFaviconComponent } from './html-favicon.component';

describe('HtmlFaviconComponent', () => {
  let component: HtmlFaviconComponent;
  let fixture: ComponentFixture<HtmlFaviconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlFaviconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlFaviconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
