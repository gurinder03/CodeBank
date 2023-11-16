import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlJavascriptComponent } from './html-javascript.component';

describe('HtmlJavascriptComponent', () => {
  let component: HtmlJavascriptComponent;
  let fixture: ComponentFixture<HtmlJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlJavascriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
