"use strict"

var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res) {

    //console.log nos devuelve todo doble por el favicon
    //asi nos deshacemos de esta peticion
    if (req.url.indexOf("favicon.ico") > 0) {
        return;
    }

    fs.readFile("./index.html", function(err, html) {
        var html_string = html.toString();
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var arreglo_parametros = [],
            parametros = {};
        var nombre = "";
        //preguntamos si la solicitud contiene el caracter "?" que nos indica que vienen parametros por url
        //por ahora solo obtenemos los parametros de la URL
        if (req.url.indexOf("?") > 0) {
            //tengo esta URL => "/?nombre=valor"
            //split me devuelve un arreglo con la "/" y el parametro y nombre
            // ["/", "nombre=Valor"]
            var url_data = req.url.split("?");
            //[nombre=Valor, parametro2=Valor2]
            var arreglo_parametros = url_data[1].split("&");
        }

        for (let i = 0; i < arreglo_parametros.length; i++) {
            var parametro = arreglo_parametros[i];
            //los separo para obtener el valor de la variable y el nombre
            var param_data = parametro.split("=");
            parametros[param_data[0]] = param_data[1];
        }

        for (let i = 0; i < variables.length; i++) {
            var variable = variables[i];
            html_string = html_string.replace(`{${variables[i]}}`, parametros[variable]);
        }

        //mandamos el contenido
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html_string);
        res.end();
    });
}).listen(8080);