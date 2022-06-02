const Recomendacion = require('../models/Recomendaciones');

//Crear una recomendacion
module.exports.crearRecomendacion = async function (req, res) {
    try {
        const nuevaRecomendacion = new Recomendacion({... req.body});
        console.log(nuevaRecomendacion);
        const respuesta = await nuevaRecomendacion.save();
        res.status(200).json({respuesta, mensaje: 'Recomendacion creada con exito'});
    } catch (error) {
        res.status(500).json({error});
    }
}


// Eliminar una recomendacion
module.exports.eliminarRecomendacion = (req, res) => {
    const {idRecomendacion} = req.params;
    Recomendacion.findByIdAndDelete(idRecomendacion)
    .then((recomendacion) => res.status(200).json({recomendacion, mensaje: 'Recomendacion eliminada con exito'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al eliminar la recomendacion'}));
}
// actualizar una recomendacion
module.exports.actualizarRecomendacion = (req, res) => {
    const {idRecomendacion} = req.params;
    const {nombre} = req.body;
    const {descripcion} = req.body;
    const {idSitios} = req.body;
    Recomendacion.updateOne({_id:idRecomendacion },{
        nombre: nombre,
        descripcion: descripcion,
        idSitios: idSitios
    })
    .then((recomendacion) => res.status(200).json({recomendacion, mensaje: 'Recomendacion actualizada con exito'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al actualizar la recomendacion'}));
}
// Obtener todas las recomendaciones
module.exports.obtenerRecomendaciones = (req, res) => {
    Recomendacion.find()
    .then((recomendaciones) => res.status(200).json({recomendaciones}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al obtener las recomendaciones'}));
}
// 