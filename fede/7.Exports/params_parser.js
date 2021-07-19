"use strict"


function parse(req) {
    var arreglo_parametros = [],
        parametros = {};

    if (req.url.indexOf("?") > 0) {
        let url_data = req.url.split("?");
        arreglo_parametros = url_data[1].split("&");
    }

    for (let i = arreglo_parametros.length - 1; i >= 0; i--) {
        let parametro = arreglo_parametros[i];
        let param_data = parametro.split("=");
        parametros[param_data[0]] = param_data[1];
    }

    /** Retorna un json con los parametros */
    return parametros;
}

/**lo exportamos en una variable
 * LO unico que exportamos va aca
 */
module.exports.parse = parse;