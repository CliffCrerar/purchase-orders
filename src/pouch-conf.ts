/**
 * Pouchdb config
 */

import Pouchdb from 'pouchdb';
import http from 'pouchdb-adapter-http';
import idb from 'pouchdb-adapter-idb';
import find from 'pouchdb-adapter-idb';
import upsert from 'pouchdb-upsert'

Pouchdb.plugin(http).plugin(idb).plugin(find).plugin(upsert);

export default Pouchdb;
