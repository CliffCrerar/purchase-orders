/**
 * Main server
 */

const
  $ = require,
  Markdown = $('markdown-it'),
  express = $('express'),
  app = express(),
  path = $('path'),
  fs = $('fs'),
  PORT = 3000;

const
  md = new Markdown();
  [{createReadStream: stream, readFileSync: read},{resolve,join}]=[fs,path]

app.all('*', (req, res, next) => {
  console.log('MAIN',res.statusCode, 'Path:', req.path);
  next();
})

app.get('/readme', (req,res)=>{

  console.log('req', req.header);
  resolve()
  console.log('resolve(): ', read(resolve('../../../README.md'),'utf8'));

  // stream('# Hi I am markdown poes').pipe(res.status(200));
  res.status(200).send({message: read(resolve('../../../README.md'),'utf8')})


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
