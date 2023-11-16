import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlSemanticsComponent } from './html-semantics.component';

describe('HtmlSemanticsComponent', () => {
  let component: HtmlSemanticsComponent;
  let fixture: ComponentFixture<HtmlSemanticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlSemanticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlSemanticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
