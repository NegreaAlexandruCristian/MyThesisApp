import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByTopicComponent } from './filter-by-topic.component';

describe('FilterByTopicComponent', () => {
  let component: FilterByTopicComponent;
  let fixture: ComponentFixture<FilterByTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
