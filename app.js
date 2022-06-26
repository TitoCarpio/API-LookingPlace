var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./rutas/index');
var usersRouter = require('./rutas/usuarios');
const sitiosRouter = require('./rutas/sitiosTuristico');
const resenasRouter = require('./rutas/reseña');
const recomendacionesRouter = require('./rutas/recomendacion');
const favoritosRouter = require('./rutas/favorito');
const database = require('./configuracion/baseDeDatos');

require('dotenv').config()

var app = express();

database.connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/usuarios', usersRouter);
app.use('/api/v1/sitios', sitiosRouter);
app.use('/api/v1/resenas', resenasRouter);
app.use('/api/v1/recomendaciones', recomendacionesRouter);
app.use('/api/v1/favoritos', favoritosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
