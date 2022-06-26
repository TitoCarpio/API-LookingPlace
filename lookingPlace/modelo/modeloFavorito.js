const mongoose = require('mongoose')
    schema = mongoose.Schema;

// Construyendo el esquema para el modelo de los favoritos
const favoritoEsquema = new Schema({
    idSitio: {
        type: String,
        required: true

    },
    idUsuario: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Favorito', favoritoEsquema);