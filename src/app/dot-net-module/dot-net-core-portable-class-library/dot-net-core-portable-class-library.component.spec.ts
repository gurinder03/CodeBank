import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCorePortableClassLibraryComponent } from './dot-net-core-portable-class-library.component';

describe('DotNetCorePortableClassLibraryComponent', () => {
  let component: DotNetCorePortableClassLibraryComponent;
  let fixture: ComponentFixture<DotNetCorePortableClassLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCorePortableClassLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetCorePortableClassLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
