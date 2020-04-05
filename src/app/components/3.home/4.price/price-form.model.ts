
/**
 * Price Form Model
 */

import PouchDB from 'src/pouch-conf';
import { Subject } from 'rxjs';

export class PriceFormModel {
  public subject: Subject<number>;
  public validationRegexp: RegExp;
  public priceInputHintOne: string;
  constructor(
    public priceDescription: string = 'New Price',
    public price?: number,
    public createDate = new Date().toString()
  ) {
    this.validationRegexp = new RegExp(/^(\d{0,10}\.\d{0,2}|\d{0,10}|\.\d{0,2})$/);
    this.priceInputHintOne = 'Whole number 10 characters and 2 decimals';
  }

  clear(){
    this.price = null;
    this.priceDescription = 'New Price';
    this.createDate = new Date().toString();
  }
}
