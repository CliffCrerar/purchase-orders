/**

 * Product model
 */

import { PriceModel } from './price.model';
import { SupplierModel } from './supplier-model';

export class ProductModel {
  public static productId = 100001;
  constructor(
    public name: string,
    public supplier: SupplierModel,
    public price: PriceModel
  ) {
    // super()
    ProductModel.productId++;
  }
}
