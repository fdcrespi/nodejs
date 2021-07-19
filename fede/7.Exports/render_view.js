"use strict";

function render(html_string, parametros) {
    let variables = html_string.match(/[^\{\}]+(?=\})/g);
    for (let i = variables.length - 1; i >= 0; i--) {
        let variable = variables[i];
        html_string = html_string.replace(`{${variables[i]}}`, parametros[variable]);
    }
    return html_string;
}

module.exports.renders = render;