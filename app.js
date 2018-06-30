var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

//var book = require('./routes/book');
var post = require('./routes/post');
var login = require('./routes/login');
//var booknew = require('./routes/booknew');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
mongoose.connect('mongodb://localhost/goshiapp', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
//app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/home', express.static(path.join(__dirname, 'dist')));
//app.use('/heroes', express.static(path.join(__dirname, 'dist')));
app.use('/admin/create_post', express.static(path.join(__dirname, 'dist')));
app.use('/admin/all_post', express.static(path.join(__dirname, 'dist')));
app.use('/admin/login', express.static(path.join(__dirname, 'dist')));
app.use('/admin', express.static(path.join(__dirname, 'dist')));
app.use('/admin/dashboard', express.static(path.join(__dirname, 'dist')));
//app.use('/bookcreate', express.static(path.join(__dirname, 'dist')));
//app.use('/booknew', express.static(path.join(__dirname, 'dist')));
//app.use('/user', express.static(path.join(__dirname, 'dist')));

//app.use('/booknew', booknew);
//app.use('/book', book);
app.use('/post', post);
app.use('/login', login);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
