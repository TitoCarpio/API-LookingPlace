// Variable para llamar el modelo que se va a implementar para los sitios turisticos.
const SitioTuristico = require('../modelo/modeloSitioT');

// Obtener todos los sitios turisticos.
module.exports.obtenerSitiosTuristicos = (req, res) => {
    SitioTuristico.find({})
    .then((sitiosT) => res.status(200).json({sitiosT}))
    .catch((err) => res.status(500).json({err}));
}
// Para obtener un solo lugar sitios turisticos.
module.exports.obtenerSitioTuristico = (req, res)=>{
    const {idSitioT} = req.params;
    SitioTuristico.findById(idSitioT)
    .then((sitioT) => res.status(200).json({sitioT}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al obtener el sitio turistico'}));

}

// Para poder crear un sitio turistico.
module.exports.crearSitioTuristico = async function (req, res) {

    try {
        const nuevoSitioT = new SitioTuristico({... req.body});
        const respuesta = await nuevoSitioT.save();
        res.status(200).json({respuesta, mensaje: 'Sitio turistico creado con exito'});
    } catch (error) {
       res.status(500).json({error});
    }
}

// Para poder actualizar un sitio turistico.
module.exports.actualizarSitioTuristico = (req, res) => {
    const {idSitioT} = req.params;
    const sitioT = req.body;
    SitioTuristico.findByIdAndUpdate(idSitioT, sitioT, {new: true})
    .then((sitioT) => res.status(200).json({sitioT, mensaje: 'Sitio turistico actualizado con exito'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al actualizar el sitio turistico'}));
}

// Para poder eliminar un sitio turistico.
module.exports.eliminarSitioTuristico = (req, res) => {
    const {idSitioT} = req.params;
    SitioTuristico.findByIdAndDelete(idSitioT)
    .then((sitioT) => res.status(200).json({sitioT, mensaje: 'Sitio turistico eliminado con exito'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al eliminar el sitio turistico'}));
}

// Para poder obtener un sitio turistico con base a su nombre.
module.exports.obtenerSitiosTuristicosPorNombre = (req, res) => {
    const {nombre} = req.params;
    SitioTuristico.find({nombre: {$regex: nombre, $options: 'i'}})
    .then((sitiosT) => res.status(200).json({sitiosT, mensaje: 'Sitio turistico encontrado'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al obtener el sitio turistico'}));
}

// Para poder obtener sitios turistico con base a su etiqueta.
module.exports.obtenerSitioPorEtiqueta = (req,res) => {
    const {etiqueta} = req.params;
    console.log(etiqueta);
    SitioTuristico.find({etiquetas: etiqueta})
    .then((sitioT) => res.status(200).json({sitioT}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al obtener el sitio turistico'}));
}
