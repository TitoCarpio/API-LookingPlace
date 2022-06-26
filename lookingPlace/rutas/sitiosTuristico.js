//Variables creadas para llamar las rutas,el router, controlador y el autor.
var express = require('express');
var router = express.Router();
const sitioTController = require('../controlador/sitioTControlador');
const autentificacion = require('../autentificacion/autentificacion');


//De la linea 9 a la 12 son las rutas que se podran acceder desde el cliente como tambien el adminsitrador.
router.get('/',autentificacion.verificarToken, sitioTController.obtenerSitiosTuristicos);
router.get('/:idSitioT', autentificacion.verificarToken, sitioTController.obtenerSitioTuristico);
router.get('/buscar/:nombre', autentificacion.verificarToken, sitioTController.obtenerSitiosTuristicosPorNombre);
router.get ('/interes/:etiqueta',autentificacion.verificarToken, sitioTController.obtenerSitioPorEtiqueta)


// De la linea 16 a la 18 son las restriccioens que debe de tiene el rol de adminsitrador.
router.post('/',autentificacion.verificarToken,autentificacion.esAdmin, sitioTController.crearSitioTuristico);
router.put('/:idSitioT', autentificacion.verificarToken,autentificacion.esAdmin,sitioTController.actualizarSitioTuristico);
router.delete('/:idSitioT', autentificacion.verificarToken,autentificacion.esAdmin,sitioTController.eliminarSitioTuristico);

module.exports = router;


