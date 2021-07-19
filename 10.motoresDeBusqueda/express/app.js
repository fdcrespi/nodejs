"use strict"

const express = require("express");
const app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    /* Es render y no send, porque llamo a un archivo */
    /* Por default tienen que estar en una carpeta 'views' */
    res.render("index", {
        name: "fede"
    });
});

app.listen(8080);