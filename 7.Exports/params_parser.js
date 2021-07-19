"use strict";

function parse(req) {
    let arreglo_parametros = [];
    let parametros = {};
    if (req.url.indexOf("?") > 0) {
        let url_data = req.url.split("?");
        arreglo_parametros = url_data[1].split("&");
    }
    for (let i = 0; i < arreglo_parametros.length; i++) {
        let param = arreglo_parametros[i];
        let param_data = param.split("=");
        parametros[param_data[0]] = param_data[1];
    }
    return parametros;
}

//aca va la funcion que quiero exportar
//con el nombre que queremos que se utilice
module.exports.parse = parse;