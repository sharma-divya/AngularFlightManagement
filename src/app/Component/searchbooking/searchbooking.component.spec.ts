import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbookingComponent } from './searchbooking.component';

describe('SearchbookingComponent', () => {
  let component: SearchbookingComponent;
  let fixture: ComponentFixture<SearchbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
