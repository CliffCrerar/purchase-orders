import { Subscription, Subject } from 'rxjs';
/**
 * Price Retrieve component
 */

import { Component, EventEmitter, OnInit, Output, ViewChild, OnDestroy, Input } from '@angular/core';
import { Collection } from 'src/app/services/data.api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PriceUpdateComponent } from './../price-update/price-update.component';
import { PriceModel } from 'src/app/models/price.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

class PriceCollection extends Collection { }

interface iModifyDialogOptions {
  width: string;
  data: PriceModel;
}

@Component({
  selector: 'app-price-retrieve',
  templateUrl: './price-retrieve.component.html',
  styleUrls: ['./price-retrieve.component.scss']
})
export class PriceRetrieveComponent implements OnInit, OnDestroy {
  /* ATTRIBUTES */
  @Output() createPrices: EventEmitter<boolean>;
  @ViewChild('priceItem', { static: false }) PriceItem: PriceModel;
  @Input() onNewPriceCreated: EventEmitter<any>;

  private collection: Collection;
  public headerTitle: string;
  public btnTooltip: string;
  public searchBarToolTip: string;
  public noPrices = false;
  public prices: any[];
  public headings: string[];
  public changeListener: any;
  public subOne: Subscription;
  public subTwo: Subscription;
  public modifyDialogRef: MatDialogRef<PriceUpdateComponent>;

  /* CONSTRUCTOR */
  constructor(private snackBar: MatSnackBar, private modifyPriceDialog: MatDialog) {
    this.onNewPriceCreated = new EventEmitter<any>();
    this.prices = [];
    this.headings = [];
    this.collection = new PriceCollection(this.snackBar);
    this.headerTitle = 'Price List Master';
    this.btnTooltip = 'Add a new price';
    this.searchBarToolTip = 'Search filter the list';
    this.createPrices = new EventEmitter<boolean>();
    this.collection.config = 'prices';
    this.subOne = new Subscription();
    this.subTwo = new Subscription();
  }
  /* HOOKS */
  ngOnInit(): void {
    this.getPricesDataFromIdb();
    this.changeListener = this.collection.local.changes({
      since: 'now',
      live: true,
      include_docs: true
    }).on('change', (change) => {
      console.log('PRICE MAIN COMPONENT change: ', change);
      this.getPricesDataFromIdb();
      this.collection.sync();
    }).on('complete', (info)=> {
      console.log('Price component info: ', info);
    }).on('error', (err) => {
      console.log('Price component error: ', err);
    });
  }
  ngOnDestroy(): void {
    this.changeListener.cancel();
    delete this.collection;
  }
  /* METHODS */
  showDate = () => new Date();

  getPricesDataFromIdb() {

    this.allDocs((docs) => {
      this.noPrices = docs.total_rows === 0;
      if (!this.noPrices) {
        this.prices = docs.rows.map(({ doc }) => doc);
        this.headings = Object.keys(this.prices[0]);
      }
    });
  }

  onAddButtonClick(ev: Event) {
    // console.log('CLICK: ', ev);
    this.createPrices.emit(true);
  }

  onSearchBarKey(ev: KeyboardEvent) {
    // console.log('ev: ', ev);
  }

  useSnackBar(msg: string): NodeJS.Timeout {
    const snackBarRef = this.snackBar.open(msg);
    return setTimeout(() => snackBarRef.dismiss(), 3000);
  }

  onClickOpenModifyDialog(priceItem: PriceModel): void {

    const modifyDialogOptions: iModifyDialogOptions = {
      width: '400px',
      data: priceItem
    };

    this.modifyPriceDialog.open(PriceUpdateComponent, modifyDialogOptions);
  }

  allDocs(callback) {
    this.collection.local.allDocs({ include_docs: true })
      .then(allDocs => callback(allDocs))
      .catch(allDocsErr => callback(allDocsErr));
  }
}
