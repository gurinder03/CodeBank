import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFormattingComponent } from './html-formatting.component';

describe('HtmlFormattingComponent', () => {
  let component: HtmlFormattingComponent;
  let fixture: ComponentFixture<HtmlFormattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlFormattingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlFormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
