var express = require('express');
var router = express.Router();
const recomendacionController = require('../controllers/recomendacionController');
const auth = require('../middleware/auth');

// rutas que podran ser accedidas por el cliente y administrador
router.get('/', auth.verificarToken,  recomendacionController.obtenerRecomendaciones);

// rutas con restriccion de administrador
router.post('/',auth.verificarToken,auth.esAdmin, recomendacionController.crearRecomendacion);
router.delete('/:idRecomendacion', auth.verificarToken,auth.esAdmin, recomendacionController.eliminarRecomendacion);
router.put('/:idRecomendacion', auth.verificarToken,auth.esAdmin, recomendacionController.actualizarRecomendacion);

module.exports = router;