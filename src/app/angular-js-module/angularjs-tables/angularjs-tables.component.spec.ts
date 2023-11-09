import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsTablesComponent } from './angularjs-tables.component';

describe('AngularjsTablesComponent', () => {
  let component: AngularjsTablesComponent;
  let fixture: ComponentFixture<AngularjsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
