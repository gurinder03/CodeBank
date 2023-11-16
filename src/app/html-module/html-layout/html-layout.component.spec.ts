import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLayoutComponent } from './html-layout.component';

describe('HtmlLayoutComponent', () => {
  let component: HtmlLayoutComponent;
  let fixture: ComponentFixture<HtmlLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
