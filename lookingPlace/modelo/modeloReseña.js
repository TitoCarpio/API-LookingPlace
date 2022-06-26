// Variable para la creacion de esquemas
const mongoose = require('mongoose')
    schema = mongoose.Schema;

// Construyento el esquema para el modelo de las reseñas
const reseñaEsquema = new Schema({
    idSitio: {
        type: String,
        required: true
    },
    idUsuario: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    visibilidad: {
        type: Boolean,
        required: true,
        enum: ['true','false'],
        default: 'true'
    }
},{
    timestamps: true
})

// exportando el modelo de Reseñas.
module.exports = mongoose.model('Reseña', reseñaEsquema)