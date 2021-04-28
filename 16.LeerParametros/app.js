"use strict"

var express = require("express");
//incorporando body parser
var bodyParser = require("body-parser");

var app = express();


app.use(express.static('public'));

//nos hace mas facil leer parametros de nuestra peticion
//usamos middleware de body parse, para leer peticiones json
app.use(bodyParser.json());
//para lo tradicionales
//Si ponemos falso o verdadero, con falso no podemos hacer parsing de arreglo o cosas que no sean json
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.post("/users", function(req, res) {
    console.log(req.body.email);
    res.send("Recibimos sus datos");
});

app.listen(8080);