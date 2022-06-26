// LLamada para obtener el modelo de las reseñas
const Reseña = require('../modelo/modeloReseña')

/* 
# Creando apartado para los metodos que debera realizarse Con una reseña:

#  1. Crear una reseña

#  2. Obtener las reseñas de un sitio turistico

#  3. Eliminar una reseña

#  4. Ocultar una reseña
*/

// 1.
module.exports.crearReseña = async function (req, res) {
    try {
        const nuevaReseña = new Reseña({... req.body});
        console.log(nuevaReseña);
        const respuesta = await nuevaReseña.save();
        res.status(200).json({respuesta, mensaje: 'Reseña creada con exito'});
    } catch (error) {
        res.status(500).json({error});
    }
}

// 2.
module.exports.obtenerReseñas = (req, res) => {
    const {idSitioT} = req.params;
    Reseña.find({idSitioT})
    .then((reseñas) => res.status(200).json({reseñas}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al obtener las reseñas'}));
}

// 3.
module.exports.eliminarReseña = (req, res) => {
    const {idReseña} = req.params;
    Reseña.findByIdAndDelete(idReseña)
    .then((reseña) => res.status(200).json({reseña, mensaje: 'Reseña eliminada con exito'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al eliminar la reseña'}));
}

// 4. 
module.exports.ocultarReseña = (req, res) => {
    const {idReseña} = req.params;
    const {visibilidad} = req.body;
    Reseña.updateOne({_id:idReseña },{
        visibilidad: visibilidad})
    .then((reseña) => res.status(200).json({reseña, mensaje: 'Reseña ocultada con exito'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al ocultar la reseña'}));
}