import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlSymbolsComponent } from './html-symbols.component';

describe('HtmlSymbolsComponent', () => {
  let component: HtmlSymbolsComponent;
  let fixture: ComponentFixture<HtmlSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlSymbolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
