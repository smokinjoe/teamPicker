var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');  // TODO JOE: get rid of this
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var dbConfig = require('./config/db');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

// TURN ON ZE APP
var app = express();

// define logging service
var logger = require('morgan');

// define models
var Player = require('./models/player');
var Team = require('./models/team');

// define routes
var indexRoute = require('./routes/index');
app.use('/', indexRoute);
var apiIndexRoute = require('./routes/apiIndex');
app.use('/api/v1', apiIndexRoute);
var playerRoute = require('./routes/player');
app.use('/api/v1/player', playerRoute);
var teamRoute = require('./routes/team');
app.use('/api/v1/team', teamRoute);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
