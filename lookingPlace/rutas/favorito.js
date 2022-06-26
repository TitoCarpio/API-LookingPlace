var express = require('express');
var router = express.Router();
const favoritoControlador = require('../controlador/favoritoControlador');
const autentificacion = require('../autentificacion/autentificacion');

//rutas que seran accedidas unicamente por el cliente
router.post('/', autentificacion.verificarToken,autentificacion.esUsuario, favoritoControlador.crearFavorito);
router.get('/', autentificacion.verificarToken,autentificacion.esUsuario, favoritoControlador.obtenerFavoritos);
router.delete('/:idFavorito', autentificacion.verificarToken,autentificacion.esUsuario, favoritoControlador.eliminarFavorito);

module.exports = router;