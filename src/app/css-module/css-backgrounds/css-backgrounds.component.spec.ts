import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBackgroundsComponent } from './css-backgrounds.component';

describe('CssBackgroundsComponent', () => {
  let component: CssBackgroundsComponent;
  let fixture: ComponentFixture<CssBackgroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssBackgroundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBackgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
