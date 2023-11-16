import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlIdComponent } from './html-id.component';

describe('HtmlIdComponent', () => {
  let component: HtmlIdComponent;
  let fixture: ComponentFixture<HtmlIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
