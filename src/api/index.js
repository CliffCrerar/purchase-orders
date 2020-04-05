/*
  Welding servers together
*/

const
  $ = require,
  path = $('path'),
  startPouchServer =  $(path.resolve(__dirname,'./couchdb-like')),
  startApiServer =  $(path.resolve(__dirname,'./app-server'));

  startPouchServer();
  startApiServer();


