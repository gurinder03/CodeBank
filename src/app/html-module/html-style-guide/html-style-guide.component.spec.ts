import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlStyleGuideComponent } from './html-style-guide.component';

describe('HtmlStyleGuideComponent', () => {
  let component: HtmlStyleGuideComponent;
  let fixture: ComponentFixture<HtmlStyleGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlStyleGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlStyleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
