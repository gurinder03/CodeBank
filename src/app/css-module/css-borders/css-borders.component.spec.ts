import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBordersComponent } from './css-borders.component';

describe('CssBordersComponent', () => {
  let component: CssBordersComponent;
  let fixture: ComponentFixture<CssBordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssBordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
