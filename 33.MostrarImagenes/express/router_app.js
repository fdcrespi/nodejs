"use strict";

const express = require('express');
/* Es un objeto router definido por express para definir rutas */
const router = express.Router();
const Imagen = require('./models/imagenes');

/* /app/ */

router.get('/', function(req, res) {
    res.render("app/home");
});

/* REST */

/* Despliega el form para crear */
router.get("/imagenes/new", function(req, res) {
    res.render("app/imagenes/new");
});

/* Despliega form de imagen existente */
router.get("imagenes/:id/edit", function(req, res) {

});

router.route('/imagenes')
    .get((req, res) => {
        Imagen.find({}, function(err, imagenes) {
            if (err) { res.redirect("/app"); return; }
            res.render("app/imagenes/index", { imagenes: imagenes });
        });
    })
    .post((req, res) => {
        let data = {
            title: req.body.title
        };
        let imagen = new Imagen(data);
        imagen.save(function(err) {
            if (!err) {
                res.redirect("/app/imagenes/" + imagen._id);
            } else {
                res.render(err);
            }
        });
    });

router.route('/imagenes/:id')
    /* Para ver una imagen */
    .get((req, res) => {
        Imagen.findById(req.params.id, function(err, imagen) {
            res.render("app/imagenes/show", { imagen: imagen });
        });
    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    });

/* Exportamos todo el objeto para importarlo en otros js */
module.exports = router;