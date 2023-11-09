import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCommentsComponent } from './html-comments.component';

describe('HtmlCommentsComponent', () => {
  let component: HtmlCommentsComponent;
  let fixture: ComponentFixture<HtmlCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
