const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

// Registrar usuario

module.exports.registrar =  (req, res) => {
  const { nombre, correo, contrasena, tipoUsuario } = req.body;

  const saltos = bcrypt.genSaltSync(Number(process.env.NUMERO_SALTOS));
  const contrasenaCifrada = bcrypt.hashSync(contrasena, saltos);

  const usuario = new Usuario({
    nombre,
    correo,
    contrasena: contrasenaCifrada,
    tipoUsuario: tipoUsuario || "cliente",
  });

  usuario
    .save()
    .then((nuevoUsuario) => {
        const informacion = {
            id: nuevoUsuario._id,
            tipoUsuario: nuevoUsuario.tipoUsuario,
        }
        const token = jwt.sign(informacion, process.env.LLAVE_SECRETA);
        res.status(200).json({token});
    })
    .catch((error) => {
      res.status(500).json({
        mensaje: "Ocurrió un error al registrar el usuario",
        error,
      });
    });
};
// Inicio de sesion de usuario
module.exports.sesion = (req, res) => {
  const { correo, contrasena } = req.body;

  Usuario.findOne({ correo })
    .then((usuario) => {
      if (!usuario) {
        return res.status(401).json({
          mensaje: "Usuario no encontrado",
        });
      }

      if (!bcrypt.compareSync(contrasena, usuario.contrasena)) {
        return res.status(401).json({
          mensaje: "Correo o contraseña es incorrecto",
        });
      }

      const informacion = {
        id: usuario._id,
        tipoUsuario: usuario.tipoUsuario,
      };

      const token = jwt.sign(informacion, process.env.LLAVE_SECRETA);

      res.status(200).json({ token });
    })

};
//Eliminar un usuario
module.exports.eliminar = (req, res) => {
  const { correoUsuario} = req.params;

    Usuario.findOneAndDelete({correoUsuario: {$regex: correoUsuario}})
    .then((usuario) => res.status(200).json({usuario, mensaje: 'Uuario eliminado'}))
    .catch((err) => res.status(500).json({err, mensaje: 'Error al eliminar el usuario'}));
}
