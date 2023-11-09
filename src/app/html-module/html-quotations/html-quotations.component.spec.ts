import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlQuotationsComponent } from './html-quotations.component';

describe('HtmlQuotationsComponent', () => {
  let component: HtmlQuotationsComponent;
  let fixture: ComponentFixture<HtmlQuotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlQuotationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
