"use strict"

const Imagen = require("../models/imagenes")

module.exports = function(req, res, next) {
    Imagen.findById(req.params.id)
        .populate("creator") //es como crear un join de esta tabla
        .exec(function(err, imagen) {
            if (imagen != null) {
                res.locals.imagen = imagen;
                next();
            } else {
                res.redirect("/app");
                //podria ir un 404
            }
        });
}