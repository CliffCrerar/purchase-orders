import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoUpdateComponent } from './po-update.component';

describe('PoUpdateComponent', () => {
  let component: PoUpdateComponent;
  let fixture: ComponentFixture<PoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
