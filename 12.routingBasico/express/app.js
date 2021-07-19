"use strict"

const express = require("express");
const app = express();

app.set('view engine', 'pug');

/* Entra primero en el get, porque es el metodo que se usa primero */
//vervos Http => GET / POST / PUT / PATCH / DELETE

app.get('/', function(req, res) {
    res.render("index");
});

/**Cualquier cosa que le pase como texto, ingresa */
app.get("/:nombre", function(req, res) {
    //de esta manera accedo al parametro en url
    res.render("form", {
        nombre: req.params.nombre
    });
})

app.post("/", function(req, res) {
    res.render("form");
});

app.listen(8080);