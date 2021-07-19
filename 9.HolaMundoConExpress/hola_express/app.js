"use strict";

//incluimos express
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hola mundo");
});

app.listen(8080); //tambien puede recibir el host que escucha y un callback para saber si ya escucho