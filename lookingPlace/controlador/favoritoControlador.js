const Favorito = require('../modelo/modeloFavorito');

// Crear un favorito
module.exports.crearFavorito = async function (req, res) {
    try {
        const nuevoFavorito = new Favorito({... req.body});
        const respuesta = await nuevoFavorito.save();
        res.status(200).json({respuesta, mensaje: 'Favorito creado con exito'});
    } catch (error) {
        res.status(500).json({error, mensaje: 'Error al crear el favorito'});
    }
}
// obtener todos los favoritios de un usuario
module.exports.obtenerFavoritos = (req, res) => {
    const {idUsuario} = req.params;
    Favorito.find({idUsuario})
    .then((favoritos) => res.status(200).json({favoritos}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al obtener los favoritos'}));
}
// eliminar un favorito
module.exports.eliminarFavorito = (req, res) => {
    const {idFavorito} = req.params;
    Favorito.findByIdAndDelete(idFavorito)
    .then((favorito) => res.status(200).json({favorito, mensaje: 'Favorito eliminado con exito'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al eliminar el favorito'}));
}



