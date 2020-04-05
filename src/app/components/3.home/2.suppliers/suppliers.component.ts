import { Component, OnInit, Output } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  /* ATTRIBUTES */
  @Output() showCreateTab: boolean;

  /* CONSTRUCTOR */
  constructor() {
    this.showCreateTab = false;
  }

  /* LIFE HOOKS */
  ngOnInit(): void { }

  /* METHODS */
  onAddNewSupplier(ev: boolean, tabs: MatTabGroup) {
    this.showCreateTab = ev;
    tabs.selectedIndex = 1;
  }

  onCancelNewSupplier(ev: boolean,tabs: MatTabGroup) {
    this.showCreateTab = ev;
    tabs.selectedIndex = 0;
  }

}
