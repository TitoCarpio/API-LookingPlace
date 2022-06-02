const jwt = require('jsonwebtoken');

module.exports.verificarToken = (req, res, next) => {
    let token = req.headers['authorization'];

    if(!token) return res.status(401).json({ mensaje: 'acceso denegado' });

    try {
        token = token.split(' ')[1];

        if(token === 'null' || !token) return res.status(401).json({ mensaje: 'Solicitud no autorizada' });
        let verificandoUsuario = jwt.verify(token, process.env.LLAVE_SECRETA);

        if (!verificandoUsuario) return res.status(401).json({ mensaje: 'Solicitud no autorizada' });

        req.usuario = verificandoUsuario;
        next();
    }
    catch (error) {
        return res.status(401).json({ mensaje: 'Token invalido' });
    }   
}

module.exports.esUsuario = (req, res, next) => {
    if(req.usuario.tipoUsuario === 'cliente') {
        next();
    } else{
        return res.status(401).json({ mensaje: 'No tienes permisos para realizar esta acción' });
    }
}


module.exports.esAdmin = (req, res, next) => {
    if(req.usuario.tipoUsuario === 'admin') {
        next();
    } else {
        return res.status(401).json({ mensaje: 'No tienes permisos para realizar esta acción' });
    }
}