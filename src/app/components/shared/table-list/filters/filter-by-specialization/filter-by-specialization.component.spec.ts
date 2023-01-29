import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBySpecializationComponent } from './filter-by-specialization.component';

describe('FilterBySpecializationComponent', () => {
  let component: FilterBySpecializationComponent;
  let fixture: ComponentFixture<FilterBySpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBySpecializationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterBySpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
