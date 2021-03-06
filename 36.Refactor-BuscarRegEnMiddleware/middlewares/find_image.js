"use strict"

const Imagen = require("../models/imagenes")

module.exports = function(req, res, next) {
    Imagen.findById(req.params.id, function(err, imagen) {
        if (imagen != null) {
            res.locals.imagen = imagen;
            next();
        } else {
            res.redirect("/app");
            //podria ir un 404
        }
    });
}