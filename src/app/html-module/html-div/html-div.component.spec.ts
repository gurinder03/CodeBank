import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDivComponent } from './html-div.component';

describe('HtmlDivComponent', () => {
  let component: HtmlDivComponent;
  let fixture: ComponentFixture<HtmlDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
