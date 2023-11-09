import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCoreMsbuildComponent } from './dot-net-core-msbuild.component';

describe('DotNetCoreMsbuildComponent', () => {
  let component: DotNetCoreMsbuildComponent;
  let fixture: ComponentFixture<DotNetCoreMsbuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCoreMsbuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetCoreMsbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
