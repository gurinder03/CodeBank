import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlStyleComponent } from './html-style.component';

describe('HtmlStyleComponent', () => {
  let component: HtmlStyleComponent;
  let fixture: ComponentFixture<HtmlStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
