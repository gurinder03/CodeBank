import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlImagesComponent } from './html-images.component';

describe('HtmlImagesComponent', () => {
  let component: HtmlImagesComponent;
  let fixture: ComponentFixture<HtmlImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
