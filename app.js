var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');  // TODO JOE: get rid of this
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var log4js = require('log4js');

// ============
// Logging
// =======
var log4js = require('log4js');
var logger = log4js.getLogger('user');
logger.setLevel('ERROR');
logger.setLevel('INFO');
logger.setLevel('DEBUG');

// ================
// TURN ON ZE APP
// ===========
var app = express();

// define logging service
var morgan = require('morgan');

// ================
// define routes
// ===========
var routes = require('./routes/routes');
app.get('/', routes.index);
app.get('/vue', routes.vue);
app.get('/partials/:name', routes.partials)
var api = require('./routes/api');
app.get('/api/v1', api.index)
app.get('/api/v1/get_office', api.getOffice);
app.get('/api/v1/form_teams', api.formTeams);
app.get('/api/v1/generate_team_name', api.generateTeamName);

// ====================
// view engine setup
// ===============
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
// ====================
// Setup Environment
// ==============
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// =========================================
// catch 404 and forward to error handler
// =================================
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ================
// error handlers
// ===========

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
