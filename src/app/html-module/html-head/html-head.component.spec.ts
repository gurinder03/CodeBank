import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlHeadComponent } from './html-head.component';

describe('HtmlHeadComponent', () => {
  let component: HtmlHeadComponent;
  let fixture: ComponentFixture<HtmlHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
