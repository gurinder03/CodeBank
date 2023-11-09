import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetCodeExecutionComponent } from './dotnet-code-execution.component';

describe('DotnetCodeExecutionComponent', () => {
  let component: DotnetCodeExecutionComponent;
  let fixture: ComponentFixture<DotnetCodeExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotnetCodeExecutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotnetCodeExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
