const
  $ = require, // quick require
  outPath = process.cwd() + '/src/api/couchdb-like', // output path
  PORT = 5984, // server port
  [ExpressPouchDb, Pouchdb, express, { resolve, join }] =
    [$('express-pouchdb'), $('./pouch-conf'), $('express'), $('path')], //destructuring variables
  overrideMode = { // overrides
    prefix: join(outPath, 'data'),
    dir: join(outPath, 'data'),
    configPath: process.cwd() + '/src/api/couchdb-like/config.json'
  },
  db = ExpressPouchDb(Pouchdb, { adapter: 'leveldb', overrideMode }), // pouchdb express integration
  dbServer = express(); // devine express server

dbServer.all('*', (req, res, next) => {

  const verbose = false;

  console.log('DB', res.statusCode, 'Path:', req.path, ' | ', new Date());

  if (verbose) {
    console.log('| - - - - - - REQ HEADERS - - - - - -|');
    console.log('   req.headers: ', req.headers);
    console.log('| - - - - - - RES HEADERS - - - - - -|');
    console.log('   res.headers: ', res.headers);
    console.log('| - - - - - - - - - - - - - - - - - -|');
  }

  next();
})

function startMessage() {
  console.log('|--------------------------------------------|')
  console.log('      POUCHDB running on port ' + PORT)
  console.log('|--------------------------------------------|')
}

function startPouchServer() {
  dbServer.use(db).listen(PORT, () => startMessage());
};

module.exports = startPouchServer;
