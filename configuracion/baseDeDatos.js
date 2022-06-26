const mongoose = require('mongoose');
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI ).then(() => {
    console.log('Conectado a la base de datos');
}).catch(err => {
    console.log('Error al conectar a la base de datos');
    
}
);
