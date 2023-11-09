import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCorePackageReferencesComponent } from './dot-net-core-package-references.component';

describe('DotNetCorePackageReferencesComponent', () => {
  let component: DotNetCorePackageReferencesComponent;
  let fixture: ComponentFixture<DotNetCorePackageReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCorePackageReferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetCorePackageReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
