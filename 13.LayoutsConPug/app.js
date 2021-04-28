"use strict"

var express = require("express");

var app = express();

app.set("view engine", "pug");

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.listen(8080);