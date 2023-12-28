import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCommentsComponent } from './css-comments.component';

describe('CssCommentsComponent', () => {
  let component: CssCommentsComponent;
  let fixture: ComponentFixture<CssCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
