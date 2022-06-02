const mongoose = require("mongoose");
Schema = mongoose.Schema;

const recomendacionesSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    idSitios: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recomendaciones", recomendacionesSchema);
