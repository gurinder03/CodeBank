import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptIntroComponent } from './javascript-intro.component';

describe('JavascriptIntroComponent', () => {
  let component: JavascriptIntroComponent;
  let fixture: ComponentFixture<JavascriptIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
