"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


mongoose.connect("mongodb://localhost/db_fotos", { useNewUrlParser: true, useUnifiedTopology: true });

/* String, Number, Date, Buffer, Boolean, Mixed, Objectid, Array */

//Para poder conectarse a una BBDD primero tener un Schema y despues un modelo

const user_schema = new Schema({
    name: String,
    username: String,
    password: String,
    age: Number,
    email: String,
    date_of_birth: Date
});

/* Los modelos son instancias que nos permiten llamar metodos
para realizar acciones en la base de datos sin necesidad de saber 
que pasa en ella */
//esto es como crear una tabla "User"--> si no lo indico le pone el plural de la primer palabra del schema
const user = mongoose.model('User', user_schema);
//Toda la conexión a la BBDD se hace a traves de modelos

//exporto el modelo
module.exports.User = user;