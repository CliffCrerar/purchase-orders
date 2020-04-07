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
  // {request}=$('http'),
  PORT = 3000;

const
  md = new Markdown();
  [{createReadStream: stream, readFileSync: read},{resolve,join}]=[fs,path]

app.use('/',express.static(resolve('../../../www')))

// app.all(['/address','/prices','/company'],(req,res)=>{
//   // res.redirect('http://localhost:5984/'+req.path);
//   try{
//     const requestProx = fetch('http://localhost:5984/'+req.path).then(res=>res);
//     res.status(200).send(requestProx);
//   } catch(err) {
//     res.status(200).send(err);
//   }
// })

app.all('*', (req, res, next) => {
  console.log('MAIN',res.statusCode, 'Path:', req.path);
  next();
})

app.get('/readme', (req,res)=>{
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
