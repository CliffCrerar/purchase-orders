/**
 * Price list model
 */
import PouchDB from 'src/pouch-conf';
import { environment } from 'src/environments/environment';

interface Assignment {
  productId: string;
  assignDate: Date;
}

export class PriceModel {
  public assignMents: Assignment[];
  public _id: string;
  public _rev: string;
  constructor(
    public priceDescription: string,
    public price: number,
    public dateCreated: string,
  ) { }
}
