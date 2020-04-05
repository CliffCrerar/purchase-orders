import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoRetrieveComponent } from './po-retrieve.component';

describe('PoRetrieveComponent', () => {
  let component: PoRetrieveComponent;
  let fixture: ComponentFixture<PoRetrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoRetrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
