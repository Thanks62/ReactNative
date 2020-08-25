// var express = require('express');
// var app = new express();
// const bodyParser = require('body-parser');
// // import {login} from './LoginController';
// app.use(bodyParser.urlencoded({extended: false}));
// app.use('', function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST');
//   next();
// });
// app.get('/api/login', function (req, res) {
//   // const action=require('./service/action/getData');
//   // action.excute(req,res);
//   // const db = require('./service/dataBase/db.js');
//   //   db.query('SELECT * FROM todo', [], function (result) {
//   //     res.send('result');
//   //     console.log(result);
//   //   });
//   res.send('result');
// });
// var server = app.listen(8888, function () {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Listening at http://%s:%s', host, port);
// });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use('', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  next();
});
app.post('/', function (req, res) {
  // res.send('hello');
  // res.send('Hello World');
  if (req.body.userName === '' || req.body.password === '') {
    res.end();
  } else {
    const db = require('./db');
    db.query(
      "SELECT `password` FROM userinfo WHERE `userName` ='" +
        req.body.userName +
        "'",
      function (result) {
        if (result.length === 0) {
          res.send({res: 'faild'});
          res.end();
        } else if (result[0].password === req.body.password) {
          res.send({res: 'success'});
          res.end();
        } else {
          res.send({res: 'faild'});
          res.end();
        }
      },
    );
  }
});

app.listen(3000);
