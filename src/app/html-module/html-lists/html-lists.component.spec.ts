import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlListsComponent } from './html-lists.component';

describe('HtmlListsComponent', () => {
  let component: HtmlListsComponent;
  let fixture: ComponentFixture<HtmlListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
