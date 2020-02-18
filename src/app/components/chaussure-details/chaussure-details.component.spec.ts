import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussureDetailsComponent } from './chaussure-details.component';

describe('ChaussureDetailsComponent', () => {
  let component: ChaussureDetailsComponent;
  let fixture: ComponentFixture<ChaussureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaussureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
