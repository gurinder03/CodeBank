import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowRuntimeExtSdkComponent } from './window-runtime-ext-sdk.component';

describe('WindowRuntimeExtSdkComponent', () => {
  let component: WindowRuntimeExtSdkComponent;
  let fixture: ComponentFixture<WindowRuntimeExtSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowRuntimeExtSdkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowRuntimeExtSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
