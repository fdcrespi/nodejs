"use strict"

const express = require("express");
const app = express();

app.set('view engine', 'pug');

/* Entra primero en el get, porque es el metodo que se usa primero */
//vervos Http => GET / POST / PUT / PATCH / DELETE

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/login', function(req, res) {
    res.render("login");
});


app.listen(8080);