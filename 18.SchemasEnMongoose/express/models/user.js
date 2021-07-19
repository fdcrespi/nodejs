"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* String, Number, Date, Buffer, Boolean, Mixed, Objectid, Array */

//Para poder conectarse a una BBDD primero tener un Schema y despues un modelo

var user_schema = new Schema({
    name: String,
    username: String,
    password: String,
    age: Number,
    email: String,
    date_of_birth: Date
});