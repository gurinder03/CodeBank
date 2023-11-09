import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCoreGarbageCollectionComponent } from './dot-net-core-garbage-collection.component';

describe('DotNetCoreGarbageCollectionComponent', () => {
  let component: DotNetCoreGarbageCollectionComponent;
  let fixture: ComponentFixture<DotNetCoreGarbageCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCoreGarbageCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetCoreGarbageCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
