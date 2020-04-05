/**

 * Company profile
 */

import { AddressModel } from './address-model';
import { UserModel } from './user.model';

export class CompanyProfileModel {
  private static Id: number;
  private _id: string;
  constructor(
    public companyName: string,
    public address: AddressModel,
    public contacts: UserModel,
    public aboutCompany?: string
  ) {
    CompanyProfileModel.Id = 10001;
    this._id = CompanyProfileModel.Id.toString();
    CompanyProfileModel.Id++;
  }
}
