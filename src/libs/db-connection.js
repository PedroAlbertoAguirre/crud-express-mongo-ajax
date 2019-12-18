const mongoose = require('mongoose'); //importo modulo de mongoose

let db; //variable

module.exports = function Connection(){
    if(!db){
        db = mongoose.createConnection('mongodb+srv://PedroAguirre:peters-77@cluster0-vos6s.gcp.mongodb.net/test?retryWrites=true&w=majority'); //me conecto a la base de datos
    
    }
    return db;
};