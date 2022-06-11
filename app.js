/**
 * Importanción del módulo http-errors.
 */
var createError = require('http-errors');
/**
 * Importación del módulo express.
 */
var express = require('express');
/**
 * Importación del módulo path.
 */
var path = require('path');
/**
 * Importación del módulo cookie-parser.
 */
var cookieParser = require('cookie-parser');
/**
 * Importación de la librería morgan.
 */
var logger = require('morgan');

var app = express();

/**
 * Configurar el motor de vistas.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

/**
 * Manejo de error "ruta no encontrada".
 */
app.use(function (req, res, next) {
  next(createError(404));
});


app.use(function (err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
