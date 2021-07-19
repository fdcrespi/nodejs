"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/db_fotos", { useNewUrlParser: true, useUnifiedTopology: true });

const user_schema = new Schema({
    name: String,
    username: String,
    password: String,
    age: Number,
    email: String,
    date_of_birth: Date
});

/*Los virtuals Son propiedades de un documento que no se guardan en la BDD pero si se mantienen en el objeto de mongoose */
//COmo por ejemplo el password confirmation, para validar contraseña
//Se hacen en el Schema y no en el mongo
//funcionan como un atributo mas, pero sin guardarse
//getter es establecer la logica en la cual se Accede un atributo
//setter es establecer la logica en la cual se asigna un valor a un atributo  
user_schema.virtual("password_confirmation").get(function() {
    return this.pass_confirm;
}).set(function(password) {
    this.pass_confirm = password;
});

const user = mongoose.model('User', user_schema);

module.exports.User = user;