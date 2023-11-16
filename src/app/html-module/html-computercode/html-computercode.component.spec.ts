import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlComputercodeComponent } from './html-computercode.component';

describe('HtmlComputercodeComponent', () => {
  let component: HtmlComputercodeComponent;
  let fixture: ComponentFixture<HtmlComputercodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlComputercodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlComputercodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
