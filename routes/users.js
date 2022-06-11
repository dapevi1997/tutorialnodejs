/**
 * Importación del módulo Express.
 */
var express = require('express');
/**
 * Implementación de la función Router() del módulo express.
 */
var router = express.Router();

/**
 * Implementación de una API (método GET)
 */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/**
 * Implementación de una API (método GET) para mostrar en pantalla la frase "Eres genial".
 */
router.get('/cool/', function (req, res, next) {
  res.send('Eres genial');
});

module.exports = router;
