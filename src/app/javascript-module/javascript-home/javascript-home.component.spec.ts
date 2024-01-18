import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptHomeComponent } from './javascript-home.component';

describe('JavascriptHomeComponent', () => {
  let component: JavascriptHomeComponent;
  let fixture: ComponentFixture<JavascriptHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
