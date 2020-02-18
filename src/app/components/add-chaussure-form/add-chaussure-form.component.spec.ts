import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChaussureFormComponent } from './add-chaussure-form.component';

describe('AddChaussureFormComponent', () => {
  let component: AddChaussureFormComponent;
  let fixture: ComponentFixture<AddChaussureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChaussureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChaussureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
