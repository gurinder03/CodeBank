import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetNumericsComponent } from './dot-net-numerics.component';

describe('DotNetNumericsComponent', () => {
  let component: DotNetNumericsComponent;
  let fixture: ComponentFixture<DotNetNumericsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetNumericsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetNumericsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
