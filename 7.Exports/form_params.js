"use strict";

var http = require("http"),
    fs = require("fs"),
    //importo el modulo que cree
    parser = require("./params_parser.js"),
    render_view = require("./render_view.js");

/** Me quedo en una variable, lo que tiene la variable del export */
var p = parser.parse;
var render = render_view.renders;

http.createServer(function(req, res) {
    if (req.url.indexOf("favicon.ico") > 0) {
        return;
    }

    fs.readFile("./index.html", function(err, html) {
        let html_string = html.toString();

        let parametros = p(req);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(render(html_string, parametros));
        res.end();
    });
}).listen(8080);