"use strict";

let http = require("http");
let fs = require("fs");

http.createServer(function(req, res) {
    fs.readFile("./index.html", function(err, html) {
        /** convierto el html en una cadena string */
        let html_string = html.toString();

        /**Uso una expresion regular para identificar patron en una cadena string 
         * Retorna un arreglo con todos los parametros del html entre "{}"
         */
        let variables = html_string.match(/[^\{\}]+(?=\})/g);

        /** declaro variables que quiero en el html */
        let nombre = "fede";

        /** reemplazo todas las variables por los parametros */
        for (let i = 0; i < variables.length; i++) {
            /** el eval, toma el valos que tenga el parametro con el mismo nombre que la variable
             * es por eso que la variable aquí se tiene que llamar como en el html
             */
            let value = eval(variables[i]);
            html_string = html_string.replace(`{${variables[i]}}`, value);
        };

        res.writeHead(200, { "Content-Type": "text/html" });
        /** mandamos el html reprocesado */
        res.write(html_string);
        res.end();
    });
}).listen(8080);