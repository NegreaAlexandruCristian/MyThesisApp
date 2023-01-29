import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByLevelComponent } from './filter-by-level.component';

describe('FilterByLevelComponent', () => {
  let component: FilterByLevelComponent;
  let fixture: ComponentFixture<FilterByLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
