const $ = require;
const [{resolve,join},express]=[$('path'),$('express')];
const app = require('express')();
const couchyPouch = require('./src/api');

app.all('*',(req,res,next)=>{
  // console.log('|-----------------INCOMING----------------|');
  // Object.keys(req.headers).forEach(key => {
  //   console.log(new Date());
  //   console.log(key);
  // });
  console.log(res.statusCode,' - ',req.path)
  next();
})

app.use('/',express.static(resolve(__dirname,'www')))
app.use(['/','/db'],couchyPouch);


app.listen(3000,()=>console.log("Server is running"));

