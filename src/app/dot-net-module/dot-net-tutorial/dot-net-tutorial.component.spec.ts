import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetTutorialComponent } from './dot-net-tutorial.component';

describe('DotNetTutorialComponent', () => {
  let component: DotNetTutorialComponent;
  let fixture: ComponentFixture<DotNetTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
