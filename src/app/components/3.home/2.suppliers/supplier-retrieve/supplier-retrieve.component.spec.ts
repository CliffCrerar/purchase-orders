import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierretrieveComponent } from './supplier-retrieve.component';

describe('SupplierretrieveComponent', () => {
  let component: SupplierretrieveComponent;
  let fixture: ComponentFixture<SupplierretrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierretrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierretrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
