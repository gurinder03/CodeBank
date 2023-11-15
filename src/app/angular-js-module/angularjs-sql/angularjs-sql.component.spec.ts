import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsSqlComponent } from './angularjs-sql.component';

describe('AngularjsSqlComponent', () => {
  let component: AngularjsSqlComponent;
  let fixture: ComponentFixture<AngularjsSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsSqlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
