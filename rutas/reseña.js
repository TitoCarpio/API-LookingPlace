var express = require('express');
var enrutador = express.Router();
var reseñaControlador = require('../controlador/reseñaControlador');
const autentificacion = require('../autentificacion/autentificacion');

/* 
# Las enrutaciones para acceder a los metodos de las Reseñas: 

#   1. Ruta la cual los administradores y el cliente pueden acceder

#   2. Ruta con restriccion de USUARIO

#   3. Ruta con restriccion de ADMINISTRADOR
*/

// 1.
enrutador.get('/:idSitioT', autentificacion.verificarToken, reseñaControlador.obtenerReseñas);

// 2.
enrutador.post('/', autentificacion.verificarToken,autentificacion.esUsuario, reseñaControlador.crearReseña);

// 3.
enrutador.delete('/:idReseña',autentificacion.verificarToken,autentificacion.esAdmin, reseñaControlador.eliminarReseña);
enrutador.patch('/:idReseña',autentificacion.verificarToken,autentificacion.esAdmin, reseñaControlador.ocultarReseña);


// Exportando...
module.exports = enrutador;