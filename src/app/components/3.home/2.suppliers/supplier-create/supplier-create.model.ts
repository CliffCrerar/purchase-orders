
/**
 * Supplier form
 */
import { ProductModel } from 'src/app/models/product.model';
export class SupplierCreateFormModel {
  constructor(
    public supplierName?: string,
    public suite?: number,
    public building?: string,
    public streetNo?: number,
    public streetName?: string,
    public area?: string,
    public city?: string,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public products?: ProductModel[]
  ) { }
}

