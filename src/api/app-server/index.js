/**
 * Main server
 */

const
  $ = require,
  express = $('express'),
  app = express(),
  PORT = 3000;

app.all('*', (req, res, next) => {
  console.log('MAIN',res.statusCode, 'Path:', req.path);
  next();
})

function startMessage() {
  console.log('|--------------------------------------------|')
  console.log('    app-server running on port ' + PORT)
  console.log('|--------------------------------------------|')
}

function startApiServer(){
  app.listen(PORT,startMessage());
}

module.exports = startApiServer;
