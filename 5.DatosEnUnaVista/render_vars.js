"use strict"

var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res) {
    fs.readFile("./index.html", function(err, html) {
        //convierto el codigo html que recibo por parametro en una cadena
        var html_string = html.toString();

        /**
         * Uso expresiones regulares
         * Que es una forma de agrupar o identificar patrones en una cadena
         * Con ese parametro, se queda con todo lo que esta entre llaves
         * devuelve un arreglo con las variables de html (el patron que paso como parametro en match)
         */

        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre = "Federico Crespi";

        for (let i = 0; i < variables.length; i++) {
            // eval() -> le pasas un string y lo evalua como codigo javascript
            // Se fija si en js esta la variable igual a "nombre", del arreglo y la evalua
            let value = eval(variables[i]);
            //en todo el html, reemplazamos las llaves, por el valor
            //en este caso, todo lo que aparece como "{nombre}", lo reemplaza por el valor
            html_string = html_string.replace(`{${variables[i]}}`, value);
        }
        //mandamos el contenido
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html_string);
        res.end();
    });
}).listen(8080);