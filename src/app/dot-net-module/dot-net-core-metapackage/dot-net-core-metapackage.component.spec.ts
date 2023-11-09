import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCoreMetapackageComponent } from './dot-net-core-metapackage.component';

describe('DotNetCoreMetapackageComponent', () => {
  let component: DotNetCoreMetapackageComponent;
  let fixture: ComponentFixture<DotNetCoreMetapackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCoreMetapackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetCoreMetapackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
