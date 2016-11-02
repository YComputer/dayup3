var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var app = express();

// middleware
app.use(favicon(path.join(__dirname, '../client/static', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/static')));

// ↓↓↓↓↓ development ↓↓↓↓↓
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
if (app.get('env') === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));
  app.use(webpackHotMiddleware(compiler));
}
// ↑↑↑↑↑ development ↑↑↑↑↑

// routes
import index from './routes/index';
import users from './routes/users';
app.use('/', index);
app.use('/api/users', users);


// ↓↓↓↓↓↓↓↓↓↓－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.json(err);
    // res.render('error', {
    //   message: err.message,
    //   error: err
    // });
  });
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.json(err);
  // res.render('error', {
  //   message: err.message,
  //   error: {}
  // });
});
// ↑↑↑↑↑↑↑↑↑↑－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－


module.exports = app;
