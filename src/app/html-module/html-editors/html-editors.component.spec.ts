import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlEditorsComponent } from './html-editors.component';

describe('HtmlEditorsComponent', () => {
  let component: HtmlEditorsComponent;
  let fixture: ComponentFixture<HtmlEditorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlEditorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlEditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
