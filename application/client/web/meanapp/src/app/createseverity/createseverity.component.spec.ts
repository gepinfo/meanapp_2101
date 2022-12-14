import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateseverityComponent } from './createseverity.component';

describe('CreateseverityComponent', () => {
  let component: CreateseverityComponent;
  let fixture: ComponentFixture<CreateseverityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateseverityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateseverityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});