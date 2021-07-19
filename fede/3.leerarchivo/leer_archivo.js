"use strict";

//incluyo libreria necesaria
var http = require("http");
//incluyo la libreria de filesystem (ver docs de la pag de node)
var fs = require("fs");

/** lee el archivo pasado como parametro 
 * ver la documentacion y ver que retorna un html
 */
//var html = fs.readFileSync("./index.html");

/** version asincrona 
 * (tiene como ventaja que el codigo no se deja de ejecutar por mas que tarde) 
 * En la sincrona, empieza y espera hasta que termine lo que se realice
 * 
 * Hacerlo asi y la funcion readfile dentro de la create server.
 * lee el archivo cada vez que se crea una peticion, 
 * la ventaja es que no debemos reiniciar el servidor si cambia el archivo */

/* fs.readFile("./index.html", function(err, html) {
    http.createServer(function(req, res) {
        //escribimos el archivo en el navegador
        res.write(html);
        //finalizo la conexion -> siempre
        res.end();
    }).listen(8080);
}); */

/** la otra opcion: */
http.createServer(function(req, res) {
    fs.readFile("./index.html", function(err, html) {
        //escribimos el archivo en el navegador
        res.write(html);
        //finalizo la conexion -> siempre
        res.end();
    });
}).listen(8080);