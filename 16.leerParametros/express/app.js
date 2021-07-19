"use strict"

const express = require("express");
const app = express();

app.use("/estatico", express.static('public'));
/* para leer parametros de un form */
app.use(express.json()); // para peticiones en application/json
app.use(express.urlencoded({ extended: true })); //para peticiones normales con extended le decimos el algoritmo, con true hacemos parsing con mas cosas 

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/login', function(req, res) {
    res.render("login");
});

app.post('/users', function(req, res) {
    res.send("Email: " + req.body.email + ", pass: " + req.body.password);
});


app.listen(8080);