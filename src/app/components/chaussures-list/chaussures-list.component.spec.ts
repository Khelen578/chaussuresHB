import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussuresListComponent } from './chaussures-list.component';

describe('ChaussuresListComponent', () => {
  let component: ChaussuresListComponent;
  let fixture: ComponentFixture<ChaussuresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaussuresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussuresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
