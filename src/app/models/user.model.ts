/**
 * User
 */

export class UserModel {
  private static Id: number;
  private _id: string;
  constructor(
    public username: string,
    public firstName: string,
    public lastName: string,
    public password: string,
    public email: string
  ) {
    UserModel.Id = 10001;
    this._id = UserModel.Id.toString();
    UserModel.Id++;
   }
}
