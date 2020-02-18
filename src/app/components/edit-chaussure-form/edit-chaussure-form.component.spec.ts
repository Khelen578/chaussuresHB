import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChaussureFormComponent } from './edit-chaussure-form.component';

describe('EditChaussureFormComponent', () => {
  let component: EditChaussureFormComponent;
  let fixture: ComponentFixture<EditChaussureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChaussureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChaussureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
