const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const resenaSchema = new Schema({
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
        enum: ['true', 'fals'],
        default: 'true'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Resena', resenaSchema);