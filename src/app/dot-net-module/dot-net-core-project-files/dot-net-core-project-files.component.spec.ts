import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCoreProjectFilesComponent } from './dot-net-core-project-files.component';

describe('DotNetCoreProjectFilesComponent', () => {
  let component: DotNetCoreProjectFilesComponent;
  let fixture: ComponentFixture<DotNetCoreProjectFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCoreProjectFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetCoreProjectFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
