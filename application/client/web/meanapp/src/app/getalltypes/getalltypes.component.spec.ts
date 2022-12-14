import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalltypesComponent } from './getalltypes.component';

describe('GetalltypesComponent', () => {
  let component: GetalltypesComponent;
  let fixture: ComponentFixture<GetalltypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetalltypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalltypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});