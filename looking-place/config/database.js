const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, useUnifiedTopology: true, 
    })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
}

module.exports = {connect};