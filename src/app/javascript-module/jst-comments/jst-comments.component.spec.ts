import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JstCommentsComponent } from './jst-comments.component';

describe('JstCommentsComponent', () => {
  let component: JstCommentsComponent;
  let fixture: ComponentFixture<JstCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JstCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JstCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
