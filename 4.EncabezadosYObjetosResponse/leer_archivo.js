"use strict";

//incluyo libreria necesaria
var http = require("http"),
    //incluyo la libreria de filesystem (ver docs de la pag de node)
    fs = require("fs");

/** Creamos el servidor */
//http.createServer(function(req, res) {
//    fs.readFile("./index.html", function(err, html) {
//        /** escribimos el encabezado de la respuesta 
//         * tipo de datos
//         * datos de autenticacion
//         */
//        res.writeHead(200, {
//            'Content-Type': "text/html"
//        });
//        //escribimos el archivo en el navegador,
//        //mandandole html como cuerpo de respuesta del servidor
//        res.write(html);
//        //finalizo la conexion -> siempre
//        res.end();
//    });
//}).listen(8080);

//MANDANDO JSON
http.createServer(function(req, res) {
    fs.readFile("./index.html", function(err, html) {
        res.writeHead(200, {
            'Content-Type': "application/json"
        });
        res.write(JSON.stringify({ nombre: "Fede", apellido: "Crespi" }));
        res.end();
    });
}).listen(8080);