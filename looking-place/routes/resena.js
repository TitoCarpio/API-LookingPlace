var express = require('express');
var router = express.Router();
const resenaController = require('../controllers/resenaController');
const auth = require('../middleware/auth');

//rutas que podran ser accedidas por el cliente y administrador
router.get('/:idSitioT', auth.verificarToken, resenaController.obtenerResenas);

//rutas con restriccion de usuario
router.post('/', auth.verificarToken,auth.esUsuario, resenaController.crearResena);

//rutas con restriccion de administrador
router.delete('/:idResena', auth.verificarToken,auth.esAdmin, resenaController.eliminarResena);
router.patch('/:idResena', auth.verificarToken,auth.esAdmin, resenaController.ocultarResena);


module.exports = router;