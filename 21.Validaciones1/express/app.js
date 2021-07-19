"use strict"

const express = require("express");
const app = express();
/*Importo los modelos creados */
const User = require("./models/user").User;

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
    let user = new User({
        email: req.body.email,
        password: req.body.password,
        password_confirmation: req.body.password_confirmation
    });
    console.log(user.password_confirmation);
    //los errors que se obtienen al intentar validar
    user.save(function(err) {
        if (err) {
            console.log(String(err));
        }
        res.send("guardamos tus datos");
    });
});


app.listen(8080);