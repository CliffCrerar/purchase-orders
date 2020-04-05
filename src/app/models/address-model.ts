/**
 * Address Model
 */

export class AddressModel {
  public static Id: number;
  private _id: string;
  public addressFor: string;
  constructor(
    public suite: string,
    public building: string,
    public streetNo: string,
    public streetName: string,
    public area: string,
    public city: string,
  ) {

    AddressModel.Id = 10001;
    this._id = AddressModel.Id.toString();
    AddressModel.Id++;
  }

  set setFor(addressFor: string) { this.addressFor = addressFor; }
}
