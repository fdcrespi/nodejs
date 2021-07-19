"use strict";

let http = require("http");

/**
 * Es asi porque a createserver le tenemos que pasar estos parametros 
 * req es la solicitud y res la respuesta 
 * */
let manejador = function(req, res) {
    console.log("recibiste una peticion");
    /** cierra la conexion para saber que ya cargo la web */
    res.end("hola mundo");
};

/** 
 * Crea el servidor
 * Se puede hacer con el protocolo http */
let server = http.createServer(manejador);

/**
 * lo coloca dentro de la red para que se le hagan peticiones
 * Se le indica el puerto donde queres que lo ejecute
 *  */
server.listen(8080);