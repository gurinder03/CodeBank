import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlXhtmlComponent } from './html-xhtml.component';

describe('HtmlXhtmlComponent', () => {
  let component: HtmlXhtmlComponent;
  let fixture: ComponentFixture<HtmlXhtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlXhtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlXhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
