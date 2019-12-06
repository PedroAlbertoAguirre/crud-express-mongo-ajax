const mongoose = require('mongoose'); //importo modulo de mongoose

let db; //variable

module.exports = function Connection(){
    if(!db){
        db = mongoose.createConnection('mongodb://localhost/crud-example'); //me conecto a la base de datos
    
    }
    return db;
};