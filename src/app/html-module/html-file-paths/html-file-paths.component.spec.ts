import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFilePathsComponent } from './html-file-paths.component';

describe('HtmlFilePathsComponent', () => {
  let component: HtmlFilePathsComponent;
  let fixture: ComponentFixture<HtmlFilePathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlFilePathsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlFilePathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
