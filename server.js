/**
 * App server
 */

const
  $ = require,
  [{ spawn }, { resolve, join }] = [$('child_process'), $('path')];
/* -------------------# CONFIG #----------------------- */

const
  dbProcessCWD = __dirname + '/src/api/couchdb-like',
  apiProcessCWD = __dirname + '/src/api/app-server',
  cpOptions = (stdio, cwd) => ({ stdio, cwd });

console.log('|----------------RUN SERVER-SIDE ASSETS--------------------|');

/* -------------------DB PROCESS----------------------- */

console.log('COUCHDB Process');

function CouchDBProcess() {

  const
    args = join(dbProcessCWD, '../index.js'),
    dbProcess = spawn('node', [args], cpOptions('inherit', dbProcessCWD));

  dbProcess.on('message', (msg) => console.log('POUCH-SERVER:', msg));

  dbProcess.on('error', (error) => console.log('POUCH-SERVER:', error));

}

/* ----------------- API PROCESS --------------------- */

function ServerAPIProcess() {

  const
    args = join(apiProcess, '../index.js'),
    apiProcess = spawn('node', [args], cpOptions('inherit', apiProcessCWD));

  dbProcess.on('message', (msg) => console.log('MAIN-SERVER:', msg));

  dbProcess.on('error', (error) => console.log('MAIN-SERVER:', error));

}

// Run processes
CouchDBProcess();

