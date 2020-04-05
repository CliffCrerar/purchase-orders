/**
 * Pouchdb config
 */
const $ = require,
  [
    Pouchdb,
    http,
    levelDb,
    collections
  ] = [$('pouchdb'), $('pouchdb-adapter-http'), $('pouchdb-adapter-leveldb'), $('pouchdb-collections')];

Pouchdb
  .plugin(http)
  .plugin(levelDb).plugin(collections);

module.exports = Pouchdb;
