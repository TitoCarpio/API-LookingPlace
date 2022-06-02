var express = require('express');
var router = express.Router();
const sitioTController = require('../controllers/sitioTController');
const auth = require('../middleware/auth');

//Rutas que podran ser accedidas por el cliente y administrador
router.get('/',auth.verificarToken, sitioTController.obtenerSitiosTuristicos);
router.get('/:idSitioT', auth.verificarToken, sitioTController.obtenerSitioTuristico);
router.get('/buscar/:nombre', auth.verificarToken, sitioTController.obtenerSitiosTuristicosPorNombre);
router.get ('/interes/:etiqueta', sitioTController.obtenerSitioPorEtiqueta)

// Rutas con restriccion de administrador
router.post('/',auth.verificarToken,auth.esAdmin, sitioTController.crearSitioTuristico);
router.put('/:idSitioT', auth.verificarToken,auth.esAdmin,sitioTController.actualizarSitioTuristico);
router.delete('/:idSitioT', auth.verificarToken,auth.esAdmin,sitioTController.eliminarSitioTuristico);

module.exports = router;


