import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTablesComponent } from './html-tables.component';

describe('HtmlTablesComponent', () => {
  let component: HtmlTablesComponent;
  let fixture: ComponentFixture<HtmlTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
