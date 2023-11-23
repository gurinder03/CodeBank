import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlUrlEncodeComponent } from './html-url-encode.component';

describe('HtmlUrlEncodeComponent', () => {
  let component: HtmlUrlEncodeComponent;
  let fixture: ComponentFixture<HtmlUrlEncodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlUrlEncodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlUrlEncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
