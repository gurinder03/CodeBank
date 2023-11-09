import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCorePrerequisitesComponent } from './dot-net-core-prerequisites.component';

describe('DotNetCorePrerequisitesComponent', () => {
  let component: DotNetCorePrerequisitesComponent;
  let fixture: ComponentFixture<DotNetCorePrerequisitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCorePrerequisitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetCorePrerequisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
