import { upsert } from 'pouchdb-upsert';
import { PriceRetrieveComponent } from './../price-retrieve/price-retrieve.component';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Collection } from 'src/app/services/data.api.service';
import { NgForm } from '@angular/forms';
import { PriceModel } from 'src/app/models/price.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, ViewChild, OnDestroy } from '@angular/core';

class PricesCollection extends Collection { }

@Component({
  selector: 'app-price-update',
  templateUrl: './price-update.component.html',
  styleUrls: ['./price-update.component.scss']
})
export class PriceUpdateComponent implements OnInit, OnDestroy {
  /* ATTRIBUTES */

  @ViewChild('priceModifyForm') priceModifyForm: NgForm;

  public dialogTitle: string;
  private collection: Collection;
  public validationRegexp: RegExp;
  public priceInputHintOne: string;
  public subOne: Subscription;

  /* CONSTRUCTOR */
  constructor(
    @Inject(MAT_DIALOG_DATA) public model: PriceModel,
    public modifyDialog: MatDialogRef<PriceUpdateComponent>,
    private snackBar: MatSnackBar
  ) {
    this.subOne = new Subscription();
    this.collection = new PricesCollection(snackBar);
    this.dialogTitle = 'Modify Price';
    this.validationRegexp = new RegExp(/^(\d{0,10}\.\d{0,2}|\d{0,10}|\.\d{0,2})$/);
    this.priceInputHintOne = 'Whole number 10 characters and 2 decimals';
    // console.log(this.model);

  }

  /* LIFE HOOKS */
  ngOnInit(): void {
    this.collection.config = 'prices';
    this.subOne = this.collection.dataEventListener.subscribe(dataEvent => {
      console.log('dataEvent: ', dataEvent);
      this.modifyDialog.close();
    });
  }

  ngOnDestroy() {
    this.subOne.unsubscribe();
    delete this.collection;
  }

  /* METHODS */

  onCloseDialogClick() {
    // console.log('click');
    this.showSnackBar('Action Cancelled');
    this.modifyDialog.close();
  }

  onClickCancel() {
    this.onCloseDialogClick();
  }

  onDeleteClick() {
    // console.log(this.model);
    // this.collection.local.remove(this.model._id)
    try {

      // console.log('this.collection.local: ', this.collection.local);
      this.collection.local.get(this.model._id)

        .then(getResult => {
          // console.log('GET RESULT', getResult);

          this.collection.local.remove(getResult).then(removeResult => {
            this.showSnackBar('Success! Price was deleted.');
            // this.collection.sync();
            this.modifyDialog.close();
            console.log('REMOVERESULT', removeResult);
            // this.modifyDialog.close();

          }).catch(removeErr => {
            // console.log('REMOVE ERR', removeErr);
            this.showSnackBar('Failed, price was not deleted.');
          });

        })

        .catch(getError => {

          this.showSnackBar('#ERR, there was an error deleting the price');
          // console.log('GET ERR', getError);

        });

    } catch (err) {

      console.error(err);
    }
  }

  onUpdateClick() {
    this.collection.local.upsert(this.model._id, (doc) => {
      return this.model;
    })
      .then(upsertResult => {
        if (upsertResult.updated) {
          this.showSnackBar('Updated Successful');
          this.modifyDialog.close();
        } else {
          this.showSnackBar('Updated failed');
          throw new Error('Update failed');
        }
      })
      .catch(upsertError => console.error('upsertError: ', upsertError));

  }

  showDate = () => new Date();

  showSnackBar(msg: string): NodeJS.Timeout {
    const ref = this.snackBar.open(msg);
    return setTimeout(() => ref.dismiss(), 3000);
  }
}
