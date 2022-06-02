var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middleware/auth');

router.post('/registro', usuarioController.registrar);
router.post('/sesion', usuarioController.sesion);

// Rutas con restriccion de administrador
router.delete('/:correoUsuario', auth.verificarToken,auth.esAdmin, usuarioController.eliminar);

module.exports = router;
