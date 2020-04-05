import { Component, OnInit } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit {
  /* ATTRIBUTES */
  public displayCreatePurchaseOrder: boolean;

  /* CONSTRUCTOR */
  constructor() {
    this.displayCreatePurchaseOrder = false;
  }

  /* LIFE HOOKS */
  ngOnInit(): void {
  }

  /* EVENTS */
  onNewPurchaseOrder(ev: string, poTabs: MatTabGroup): void {
    this.displayCreatePurchaseOrder = true;
    poTabs.selectedIndex = 1;
  }
}
