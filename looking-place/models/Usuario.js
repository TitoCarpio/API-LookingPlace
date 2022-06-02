const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    correo : {
        type: String,
        unique : true,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    tipoUsuario: {
        type: String,
        required: true,
        enum: ['admin', 'cliente'],
        default: 'cliente'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Usuario', usuarioSchema);
