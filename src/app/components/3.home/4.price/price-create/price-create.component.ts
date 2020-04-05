import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

import { Collection } from 'src/app/services/data.api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { PriceFormModel } from '../price-form.model';
import { PriceModel } from 'src/app/models/price.model';
import { Subscription } from 'rxjs';


class PriceDataCollection extends Collection { }

@Component({
  selector: 'app-price-create',
  templateUrl: './price-create.component.html',
  styleUrls: ['./price-create.component.scss']
})
export class PriceCreateComponent implements OnInit, OnDestroy {
  /* ATTRIBUTES */
  @ViewChild('newPriceForm', { static: true }) newPriceForm: NgForm;
  @Output() cancelled: EventEmitter<string>;
  @Output() newPriceCreated: EventEmitter<null>;


  public model: PriceFormModel;
  public collection: Collection;
  public subOne: Subscription;
  public subTwo: Subscription;
  public subThree: Subscription;
  public disableSaveButton: boolean;
  private db: any;

  /* CONSTRUCTOR */
  constructor(private snackBar: MatSnackBar) {
    this.model = new PriceFormModel();
    this.collection = new PriceDataCollection(snackBar);
    this.subOne = new Subscription();
    this.subTwo = new Subscription();
    this.cancelled = new EventEmitter<string>();
    this.newPriceCreated = new EventEmitter<null>();
    this.db = this.collection.local;
    this.disableSaveButton = false;

  }
  /* LIFE HOOKS */
  ngOnInit(): void {
    console.log('newPriceForm: ', this.newPriceForm);
    this.collection.config = 'prices';
    this.subOne = this.newPriceForm.statusChanges.subscribe(status => console.log(status));
  }

  getLatestId() {
    this.db.allDocs().then(allDocs => console.log(allDocs));
  }


  disabledSave(newState: boolean): void {
    this.disableSaveButton = newState;
  }

  ngOnDestroy(): void {
    this.subOne.unsubscribe();
    delete this.collection;
    // this.subTwo.unsubscribe();
  }

  /* METHODS */
  showDate = () => new Date();

  showSnackBar(msg: string) {
    const ref = this.snackBar.open(msg);
    return setTimeout(() => ref.dismiss(), 3000);
  }

  onCancelClick = () => this.cancelled.emit('create-form');

  onSaveClick() {

    if (this.newPriceForm.invalid) {
      this.showSnackBar('Cant submit, form input invalid.');
    } else {
      // this.disabledSave(true);
      this.showSnackBar('Saving data now');
      this.submitFormToCollection(this.model);
    }
    console.log('this.model: ', this.model);
    // const entryToSave
  }

  submitFormToCollection(formModel: PriceFormModel) {

    const newPrice = new PriceModel(formModel.priceDescription, formModel.price, formModel.createDate);

    this.collection.local.post(newPrice).then(postResult => {
      console.log('postResult: ', postResult);
      this.onCancelClick();
    }).catch(postErr => {
      console.log(postErr);
    });
  }
}
