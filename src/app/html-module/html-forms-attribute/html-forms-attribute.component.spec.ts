import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFormsAttributeComponent } from './html-forms-attribute.component';

describe('HtmlFormsAttributeComponent', () => {
  let component: HtmlFormsAttributeComponent;
  let fixture: ComponentFixture<HtmlFormsAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlFormsAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlFormsAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
