import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-po-retrieve',
  templateUrl: './po-retrieve.component.html',
  styleUrls: ['./po-retrieve.component.scss']
})
export class PoRetrieveComponent implements OnInit {
  @Output('newPurchaseOrder') newPurchaseOrder: EventEmitter<string>;

  public newButtonTooltip: string;
  public datePickerTooltip: string;

  constructor() {
    this.newButtonTooltip = 'Add a new purchase order';
    this.datePickerTooltip = 'Set a custom period';
    this.newPurchaseOrder = new EventEmitter();
  }

  ngOnInit(): void {
    // createPo

  }

  addNewPurchaseOrder(): void {
    console.log('Add new PO');
    this.newPurchaseOrder.emit('new');
  }

}
