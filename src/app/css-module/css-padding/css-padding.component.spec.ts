import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPaddingComponent } from './css-padding.component';

describe('CssPaddingComponent', () => {
  let component: CssPaddingComponent;
  let fixture: ComponentFixture<CssPaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssPaddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
