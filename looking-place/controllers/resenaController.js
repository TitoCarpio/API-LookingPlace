const Resena = require('../models/Resena');

//Crear una reseña
module.exports.crearResena = async function (req, res) {
    try {
        const nuevaResena = new Resena({... req.body});
        console.log(nuevaResena);
        const respuesta = await nuevaResena.save();
        res.status(200).json({respuesta, mensaje: 'Resena creada con exito'});
    } catch (error) {
        res.status(500).json({error});
    }
}

//Obtener las resenas de un sitio turistico
module.exports.obtenerResenas = (req, res) => {
    const {idSitioT} = req.params;
    Resena.find({idSitioT})
    .then((resenas) => res.status(200).json({resenas}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al obtener las reseñas'}));
}
//eliminar una reseña
module.exports.eliminarResena = (req, res) => {
    const {idResena} = req.params;
    Resena.findByIdAndDelete(idResena)
    .then((resena) => res.status(200).json({resena, mensaje: 'Resena eliminada con exito'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al eliminar la reseña'}));
}
//ocultar una reseña
module.exports.ocultarResena = (req, res) => {
    const {idResena} = req.params;
    const {visibilidad} = req.body;
    Resena.updateOne({_id:idResena },{
        visibilidad: visibilidad})
    .then((resena) => res.status(200).json({resena, mensaje: 'Resena ocultada con exito'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al ocultar la reseña'}));
}

