import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallticketsComponent } from './getalltickets.component';

describe('GetallticketsComponent', () => {
  let component: GetallticketsComponent;
  let fixture: ComponentFixture<GetallticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});