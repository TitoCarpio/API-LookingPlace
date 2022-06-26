var express = require('express');
var router = express.Router();
const recomendacionControlador = require('../controlador/recomendacionControlador');
const autentificacion = require('../autentificacion/autentificacion');

// rutas que podran ser accedidas por el cliente y administrador
router.get('/', autentificacion.verificarToken,  recomendacionControlador.obtenerRecomendaciones);

// rutas con restriccion de administrador
router.post('/',autentificacion.verificarToken, recomendacionControlador.crearRecomendacion);
router.delete('/:idRecomendacion', autentificacion.verificarToken, recomendacionControlador.eliminarRecomendacion);
router.put('/:idRecomendacion', autentificacion.verificarToken, recomendacionControlador.actualizarRecomendacion);

module.exports = router;