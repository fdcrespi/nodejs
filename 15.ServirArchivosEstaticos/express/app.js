"use strict"

const express = require("express");
const app = express();

//incluimos una libreria ó middleware 
//Le decimos en q carpeta lo vamos a usar
//todo lo de esta carpeta podemos acceder por url
/** app.use(express.static('public')); */

//agrego un prefijo a los archivos estaticos
app.use("/estatico", express.static('public'));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/login', function(req, res) {
    res.render("login");
});


app.listen(8080);