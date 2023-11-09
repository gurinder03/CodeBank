import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsFiltersComponent } from './angularjs-filters.component';

describe('AngularjsFiltersComponent', () => {
  let component: AngularjsFiltersComponent;
  let fixture: ComponentFixture<AngularjsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
