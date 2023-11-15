import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlClassesComponent } from './html-classes.component';

describe('HtmlClassesComponent', () => {
  let component: HtmlClassesComponent;
  let fixture: ComponentFixture<HtmlClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
