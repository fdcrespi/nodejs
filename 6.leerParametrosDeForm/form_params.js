"use strict";

const http = require("http");
const fs = require("fs");

http.createServer(function(req, res) {

    //inspecciono el objeto req --> la peticion
    //console.log(req);
    //evaluo si lo que se solicita es favicon
    //pregunta si encontro eso en una url
    if (req.url.indexOf("favicon.ico") > 0) {
        //para que no haga nada en caso que se pida el favicon
        return;
    }



    fs.readFile("./index.html", function(err, html) {
        let html_string = html.toString();
        let variables = html_string.match(/[^\{\}]+(?=\})/g);
        let parametros = {};
        //se fija si tiene parametros
        if (req.url.indexOf("?") > 0) {
            //separo el path de los parametros del
            //retorna /?nombre=Fede => ['/','nombre=Fede']
            let url_data = req.url.split("?");
            //me quedo por con la posicion 1 y los parametros luego de la / separados por &
            let arreglo_parametros = url_data[1].split("&");



            for (let i = arreglo_parametros.length - 1; i >= 0; i--) {
                let param = arreglo_parametros[i];
                //nombre=Fede
                let param_data = param.split("=");
                //[nombre,Fede]
                parametros[param_data[0]] = param_data[1];
            }
        }

        for (let i = variables.length - 1; i >= 0; i--) {
            html_string = html_string.replace(`{${variables[i]}}`, parametros[variables[i]]);
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html_string);
        res.end();


    })
}).listen(8080);