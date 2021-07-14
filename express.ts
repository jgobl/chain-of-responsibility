import express from  'express';

var app = express();

app.use(function (req, res, next){

  next();  
  res.write('boom');
  res.end();
});

app.use(function (req, res, next){

  next();  
  res.write('boom100');  
})

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')  ;
  res.write('hello');
});

app.listen(3000, () => console.log('express started'));