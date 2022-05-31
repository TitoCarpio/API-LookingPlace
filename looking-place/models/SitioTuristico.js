const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const SitioTuristicoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    departamento: {
        type: String,
        required: true
    },
    imagenURL: {
        type: String,
        required: true
    },
    latitud: {
        type: Number,
        required: true
    },
    longitud: {
        type: Number,
        required: true
    },
    etiquetas: {
        type: [String],
        required: true
    },
},{
    timestamps: true
});

module.exports = mongoose.model('SitioTuristico', SitioTuristicoSchema);