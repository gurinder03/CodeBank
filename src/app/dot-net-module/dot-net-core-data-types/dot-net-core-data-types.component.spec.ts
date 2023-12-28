import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCoreDataTypesComponent } from './dot-net-core-data-types.component';

describe('DotNetCoreDataTypesComponent', () => {
  let component: DotNetCoreDataTypesComponent;
  let fixture: ComponentFixture<DotNetCoreDataTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCoreDataTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetCoreDataTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
