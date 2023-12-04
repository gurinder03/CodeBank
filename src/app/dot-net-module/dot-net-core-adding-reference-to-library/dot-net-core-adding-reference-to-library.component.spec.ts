import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCoreAddingReferenceToLibraryComponent } from './dot-net-core-adding-reference-to-library.component';

describe('DotNetCoreAddingReferenceToLibraryComponent', () => {
  let component: DotNetCoreAddingReferenceToLibraryComponent;
  let fixture: ComponentFixture<DotNetCoreAddingReferenceToLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCoreAddingReferenceToLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetCoreAddingReferenceToLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
