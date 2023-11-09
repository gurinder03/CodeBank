import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCoreModularityComponent } from './dot-net-core-modularity.component';

describe('DotNetCoreModularityComponent', () => {
  let component: DotNetCoreModularityComponent;
  let fixture: ComponentFixture<DotNetCoreModularityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCoreModularityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetCoreModularityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
