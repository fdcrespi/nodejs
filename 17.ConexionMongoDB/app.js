"use strict"

var express = require("express");

var app = express();

app.use(express.static('public'));

/**Como Body-Parser ya no es necesario */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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