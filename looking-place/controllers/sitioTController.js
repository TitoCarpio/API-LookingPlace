const SitioTuristico = require('../models/SitioTuristico');

// Obtener todos los sitios turisticos
module.exports.obtenerSitiosTuristicos = (req, res) => {
    SitioTuristico.find({})
    .then((sitiosT) => res.status(200).json({sitiosT}))
    .catch((err) => res.status(500).json({err}));
}
//Obtener un sitio turistico
module.exports.obtenerSitioTuristico = (req, res)=>{
    const {idSitioT} = req.params;
    SitioTuristico.findById(idSitioT)
    .then((sitioT) => res.status(200).json({sitioT}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al obtener el sitio turistico'}));

}
//Crear un sitio turistico
module.exports.crearSitioTuristico = async function (req, res) {

    try {
        const nuevoSitioT = new SitioTuristico({... req.body});
        const respuesta = await nuevoSitioT.save();
        res.status(200).json({respuesta, mensaje: 'Sitio turistico creado con exito'});
    } catch (error) {
       res.status(500).json({error});
    }
}
//Actualizar un sitio turistico
module.exports.actualizarSitioTuristico = (req, res) => {
    const {idSitioT} = req.params;
    const sitioT = req.body;
    SitioTuristico.findByIdAndUpdate(idSitioT, sitioT, {new: true})
    .then((sitioT) => res.status(200).json({sitioT, mensaje: 'Sitio turistico actualizado con exito'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al actualizar el sitio turistico'}));
}
// Eliminar un sitio turistico
module.exports.eliminarSitioTuristico = (req, res) => {
    const {idSitioT} = req.params;
    SitioTuristico.findByIdAndDelete(idSitioT)
    .then((sitioT) => res.status(200).json({sitioT, mensaje: 'Sitio turistico eliminado con exito'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al eliminar el sitio turistico'}));
}

// Obtener sitios turisticos por nombre
module.exports.obtenerSitiosTuristicosPorNombre = (req, res) => {
    const {nombre} = req.params;
    SitioTuristico.find({nombre: {$regex: nombre, $options: 'i'}})
    .then((sitiosT) => res.status(200).json({sitiosT, mensaje: 'Sitio turistico encontrado'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al obtener el sitio turistico'}));
}

// obtener sitios turisticos por etiqueta
module.exports.obtenerSitioPorEtiqueta = (req,res) => {
    const {etiqueta} = req.params;
    console.log(etiqueta);
    SitioTuristico.find({etiquetas: etiqueta})
    .then((sitioT) => res.status(200).json({sitioT}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al obtener el sitio turistico'}));
}
