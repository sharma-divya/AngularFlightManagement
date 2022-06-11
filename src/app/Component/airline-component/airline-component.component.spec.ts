import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineComponentComponent } from './airline-component.component';

describe('AirlineComponentComponent', () => {
  let component: AirlineComponentComponent;
  let fixture: ComponentFixture<AirlineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
