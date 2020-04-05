import { PriceRetrieveComponent } from './price-retrieve/price-retrieve.component';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { Collection } from 'src/app/services/data.api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabGroup } from '@angular/material/tabs';

class PriceDataCollection extends Collection { }

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit, OnDestroy {

  @ViewChild('onNewPriceCreated', { static: false }) retrieveComponent: PriceRetrieveComponent;

  public retrieveTabTitle: string;
  public createTabTitle: string;
  public showCreateTab: boolean;
  public changeListener: any;

  constructor(private snackBar: MatSnackBar) {
    this.retrieveTabTitle = 'Retrieve Prices';
    this.createTabTitle = 'Create New Prices';
    this.showCreateTab = false;
    // this.collection = new PriceDataCollection(snackBar);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  onCancelClick(ev: string, tabGroup: MatTabGroup) {
    this.showCreateTab = false;
    tabGroup.selectedIndex = 0;
  }

  onCreatePriceClick(ev: boolean, tabGroup: MatTabGroup) {
    this.showCreateTab = true;
    tabGroup.selectedIndex = 1;
  }

  passAlongEvent(component: PriceRetrieveComponent) {
    component.getPricesDataFromIdb();
    // console.log('param: ', param);
    // console.log('Pass along event');
  }
}
