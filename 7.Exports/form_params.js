"use strict";

const http = require("http");
const fs = require("fs");
const parser = require("./params_parser.js");

const p = parser.parse;

http.createServer(function(req, res) {

    if (req.url.indexOf("favicon.ico") > 0) { return; }

    fs.readFile("./index.html", function(err, html) {
        let html_string = html.toString();
        /* Me quedo con las variables del html */
        let variables = html_string.match(/[^\{\}]+(?=\})/g);
        /* Me quedo en una variable el retorno de la funcion importada */
        /* Que me devuelve un arreglo con los parametros de la url */
        let parametros = p(req);
        /* Recorro todas las variables del html y le pongo los parametros */
        for (let i = 0; i < variables.length; i++) {
            let variable = variables[i];
            html_string = html_string.replace(`{${variables[i]}}`, parametros[variable]);
        };

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html_string);
        res.end();
    });
}).listen(8080);