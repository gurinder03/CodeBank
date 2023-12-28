import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDotNetCoreLibrariesComponent } from './sharing-dot-net-core-libraries.component';

describe('SharingDotNetCoreLibrariesComponent', () => {
  let component: SharingDotNetCoreLibrariesComponent;
  let fixture: ComponentFixture<SharingDotNetCoreLibrariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingDotNetCoreLibrariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingDotNetCoreLibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
