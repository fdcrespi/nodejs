"use strict"

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/db_fotos", { useNewUrlParser: true, useUnifiedTopology: true });

//es como definir una tabla, es un schema de usuario
const userSchemaJSON = {
    email: String,
    password: String
};

const userSchema = new Schema(userSchemaJSON);
//creo el modelo que se encarga de establecer la conexcion con la BBDD
const User = mongoose.model('User', userSchema);

app.use("/estatico", express.static('public'));
/* para leer parametros de un form */
app.use(express.json()); // para peticiones en application/json
app.use(express.urlencoded({ extended: true })); //para peticiones normales con extended le decimos el algoritmo, con true hacemos parsing con mas cosas 

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/login', function(req, res) {
    User.find(function(err, doc) {
        console.log(doc);
        res.render("login");
    });
});

app.post('/users', function(req, res) {
    let user = new User({ email: req.body.email, password: req.body.password });
    user.save(function() {
        res.send("guardamos tus datos");
    });
});


app.listen(8080);