"use strict"

var express = require("express");

var app = express();

//Poder usar el middleware
//La funcion static, nos permite servir los archivos estaticos (aquellos que no cambian)
//le indicamos que en la carpeta public estan los archvios estaticos
//todo lo que este en public se puede acceder a traves de la URL
app.use(express.static('public'));
app.use(express.static("assets"));

app.set("view engine", "pug");

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.listen(8080);