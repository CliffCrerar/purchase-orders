import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PriceRetrieveComponent } from './price-retrieve.component';

describe('PriceRetreiveComponent', () => {
  let component: PriceRetrieveComponent;
  let fixture: ComponentFixture<PriceRetrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceRetrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
