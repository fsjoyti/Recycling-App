var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var favicon = require('serve-favicon');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
module.exports = app;
require('./Routes/index.js')(app);

http.listen(3001,function () {
  console.log("Example app listening at http://localhost:3001");
});