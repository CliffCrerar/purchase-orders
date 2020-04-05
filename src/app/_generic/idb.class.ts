/**
 * Extend with components per component data access
 */


export class ApiOps {

  constructor(private _local: any, private _remote: any) {
    console.log('_remote: ', _remote);
    console.log('_local: ', _local);

  }
  // this._local.info().then(msg => console.log('LOCAL: ', msg)).catch(err => console.log('LOCAL ERR', err));
  // this._remote.info().then(msg => console.log('REMOTE: ', msg)).catch(err => console.log('REMOTE ERR', err);

}
