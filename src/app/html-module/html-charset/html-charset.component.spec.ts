import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCharsetComponent } from './html-charset.component';

describe('HtmlCharsetComponent', () => {
  let component: HtmlCharsetComponent;
  let fixture: ComponentFixture<HtmlCharsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlCharsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCharsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
