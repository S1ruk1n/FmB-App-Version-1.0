import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScraperComponent } from './data-scraper.component';

describe('DataScraperComponent', () => {
  let component: DataScraperComponent;
  let fixture: ComponentFixture<DataScraperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataScraperComponent]
    });
    fixture = TestBed.createComponent(DataScraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
