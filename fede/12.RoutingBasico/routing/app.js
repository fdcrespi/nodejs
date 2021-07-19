"use strict";

var express = require("express");

var app = express()

app.set("view engine", "pug");

//Metodo http es por el cual se hacen las peticiones
//verbos http => GET / POST

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/algo", function(req, res) {
    res.render("form");
});

//con parametros
app.get("/:nombre", function(req, res) {
    //accedemos al parametro
    //console.log(req.params.nombre);
    //lo pasamos al form
    res.render("form", { nombre: req.params.nombre });
});

app.post("/", function(req, res) {
    res.render("form");
});

app.listen(8080);