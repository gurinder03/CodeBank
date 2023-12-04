import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDotnetStandardLibraryComponent } from './create-dotnet-standard-library.component';

describe('CreateDotnetStandardLibraryComponent', () => {
  let component: CreateDotnetStandardLibraryComponent;
  let fixture: ComponentFixture<CreateDotnetStandardLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDotnetStandardLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDotnetStandardLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
