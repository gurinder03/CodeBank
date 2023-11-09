import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetIntroComponent } from './dot-net-intro.component';

describe('DotNetIntroComponent', () => {
  let component: DotNetIntroComponent;
  let fixture: ComponentFixture<DotNetIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
