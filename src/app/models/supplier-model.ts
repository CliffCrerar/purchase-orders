/**
 * Supplier model
 */

import { ProductModel } from './product.model';
import { AddressModel } from './address-model';
import { UserModel } from 'src/app/models/user.model';

export class SupplierModel {
  public static Id: number;
  private _Id: string;
  constructor(
    public supplierName,
    public supplierAddress: AddressModel,
    public supplierProducts: ProductModel[],
    public contact: UserModel
  ) {
    SupplierModel.Id = 1000001;
    this._Id = SupplierModel.Id.toString();
    SupplierModel.Id++;
  }
}
