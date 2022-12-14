import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetypesComponent } from './createtypes.component';

describe('CreatetypesComponent', () => {
  let component: CreatetypesComponent;
  let fixture: ComponentFixture<CreatetypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});