var express = require('express');
var router = express.Router();
const sitioTController = require('../controllers/sitioTController');


router.get('/', sitioTController.obtenerSitiosTuristicos);
router.get('/:idSitioT', sitioTController.obtenerSitioTuristico);
router.post('/', sitioTController.crearSitioTuristico);
router.put('/:idSitioT', sitioTController.actualizarSitioTuristico);
router.delete('/:idSitioT', sitioTController.eliminarSitioTuristico);

module.exports = router;


