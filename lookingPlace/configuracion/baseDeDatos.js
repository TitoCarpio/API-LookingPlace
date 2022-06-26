const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/lookingPlace", {
        useNewUrlParser: true, useUnifiedTopology: true, 
    })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
}

module.exports = {connect};