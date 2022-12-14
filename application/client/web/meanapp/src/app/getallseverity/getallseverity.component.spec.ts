import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallseverityComponent } from './getallseverity.component';

describe('GetallseverityComponent', () => {
  let component: GetallseverityComponent;
  let fixture: ComponentFixture<GetallseverityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallseverityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallseverityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});