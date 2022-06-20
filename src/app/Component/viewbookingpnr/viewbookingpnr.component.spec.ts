import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingpnrComponent } from './viewbookingpnr.component';

describe('ViewbookingpnrComponent', () => {
  let component: ViewbookingpnrComponent;
  let fixture: ComponentFixture<ViewbookingpnrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookingpnrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookingpnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
