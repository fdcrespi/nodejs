"use strict";

let http = require("http");
/** incluyo el modulo filesystem */
let fs = require("fs");

/** forma abreviada de crear servidor */
http.createServer(function(req, res) {
    /** leo el archivo */
    let html = fs.readFile("./index.html", function(err, html) {
        /** escribimos el archivo html en el navegador */
        res.write(html);
        res.end();
    });
}).listen(8080);