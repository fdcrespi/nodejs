"use strict";

//importamos la libreria express
var express = require("express");
//ejecutamos express, nos retorna un objeto con el que vamos a trabajar
var app = express();

//declarar path disponibles en nuestra app
app.get("/", function(req, res) {
    res.send("Hi Word");
});

// iniciamos el servidor, podemos pasarle mas parametros
app.listen(8080);