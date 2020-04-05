/**
 * Data service;
 * NOTICE that this service does not get injected it gets instantiated
 * This is very deliberate, and thought through, Angular has many features.
 * Dont always just default to a service because it is easy keep your app modular.
 * Understand how the components you are using works.
 */

import { MatSnackBar } from '@angular/material/snack-bar';
import Pouchdb from 'src/pouch-conf';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { destroyPlatform } from '@angular/core';

MatSnackBar.constructor.prototype.setTimeout = setTimeout;

export abstract class Collection {

  private collectionName: string;
  private remoteUri: string;
  private subject: Subject<any>;
  protected _local: any;
  protected _remote: any;
  protected data;

  constructor(private snackBar: MatSnackBar) {
    // this.snackBar.setTimeout = setTimeout;
    this.remoteUri = environment.dbRemote;
    this.subject = new Subject<any>();
  }

  set local(localdb: any) { this._local = new Pouchdb(localdb); }
  get local(): any { return this._local; }
  set remote(remotedb: any) { this._remote = new Pouchdb(`${this.remoteUri}/${remotedb}`); }
  get remote(): any { return this._local; }
  get dataEventListener() { return this.subject; }
  set config(collection: string) {
    this.local = collection;
    this.collectionName = collection;
  }

  testConfig(remoteOrLocal: 'remote' | 'local'): void {
    // Test local pouchdb config
    const testDb = remoteOrLocal === 'remote' ? '_local' : '_remote';
    this._local.info().then(msg => {
      console.log('LOCAL', msg);
      this.showSnackMessage(msg);
    }
    ).catch(err => {
      console.log('LOCAL', err);
      this.showSnackError(err.message);
    });
  }

  showSnackMessage(msg): NodeJS.Timeout {
    const snackBarRef = this.snackBar.open(msg);
    return setTimeout(() => snackBarRef.dismiss(), 3000);
  }

  showSnackError = (err) => this.snackBar.open('# ERR! ' + err.message);

  setRemote = (): string => this.remote = this.collectionName;

  async getData() {
    const documents = await this._local.allDocs();
    console.log('documents: ', documents);
  }

  sync(): void {
    this.setRemote();

    const SyncListener = this._local.sync(this._remote, { live: false, retry: true });

    SyncListener
      .on('active', (msg: any) => eventDelegator.call(this, 'active', msg))
      .on('change', (msg: any) => eventDelegator.call(this, 'change', msg))
      .on('complete', (msg: any) => eventDelegator.call(this, 'complete', msg))
      .on('error', (err: Error) => eventDelegator.call(this, 'error', err))
      .on('paused', (msg: any) => eventDelegator.call(this, 'paused', msg));

    function eventDelegator(type, event) {
      switch (type) {
        case 'change': handleChange.call(this, event); break;
        case 'info': handleInfo.call(this, event); break;
        case 'paused': handlePause.call(this, event); break;
        case 'active': handleActive.call(this, event); break;
        case 'error': handleError.call(this, event); break;
        case 'complete': handleComplete.call(this, event); break;
      }
    }

    function handleChange(change: any): void {
      console.log('change: ', change);
      const msg = `CHANGE: ${change.direction}, NUMBER: ${change.docs.length.toString()}`;
      this.showSnackMessage(msg);
    }

    function handlePause(msg: any): void {
      return console.log('PAUSED');
    }

    function handleInfo(msg: any): void {
      return console.log('INFO:', msg);
    }

    function handleActive(msg: any): void {
      return console.log('ACTIVE');
    }

    function handleError(err: Error): void {
      console.log('error err: ', err);
      return this.showSnackMessage(err.message);
      // totally unhandled error (shouldn't happen)
    }

    function handleComplete(msg: any): void {
      console.log('COMPLETE: ', msg);
      SyncListener.cancel();
      this.subject.next('COMPLETE');
      this.subject.complete();
    }

    return;
  }
}
