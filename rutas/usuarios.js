var express = require('express');
var router = express.Router();
const usuarioController = require('../controlador/usuarioControlador');
const autentificacion = require('../autentificacion/autentificacion');


router.post('/registro', usuarioController.registrar);
router.post('/sesion', usuarioController.sesion);

// Rutas con restriccion de administrador
router.delete('/:correoUsuario',autentificacion.verificarToken,autentificacion.esAdmin, usuarioController.eliminar);

module.exports = router;
