"use strict";

//incluyo libreria necesaria
var http = require("http");

//recibe un objeto con la solicitud del usuario y otro con la respuesta
var manejador = function(solicitud, respuesta) {
    console.log("Recibimos una nueva peticion");
    //cierro la conexion para que el servidor no se quede escuchando
    respuesta.end("hola mundo"); //le paso parametro para que se muestre algo en el navegador
};

//creamos el servidor, retornando un objeto servidor
var servidor = http.createServer(manejador);

servidor.listen(8080);