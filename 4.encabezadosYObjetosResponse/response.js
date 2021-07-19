"use strict";

let http = require("http");
let fs = require("fs");

http.createServer(function(req, res) {
    fs.readFile("./index.html", function(err, html) {
        /** encabezado de respuesta */
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ nombre: "fede", username: "fcrespi" }));
        res.end();
    })
}).listen(8080);