/**
 * Purchase order model
 */

import { SupplierModel } from './supplier-model';
import { ProductModel } from './product.model';

export class PurchaseOrderModel {
  protected static _poNumber = 10001;
  protected _poPrefix: string;
  protected _purchaseOrderId: string;
  constructor(
    public supplier: SupplierModel,
    public products: ProductModel[]
  ) {
    this._purchaseOrderId = `${this._poPrefix}-${PurchaseOrderModel._poNumber.toString()}`;
    PurchaseOrderModel._poNumber++;
  }

  get purchaseOrderId() { return this._purchaseOrderId; }
}

export class PurchaseOrderItem extends ProductModel {
  // protected static itemCode: number;
  // constructor(

  // ){
  //   super()
  // }
}
