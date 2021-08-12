"use strict";

const express = require('express');
/* Es un objeto router definido por express para definir rutas */
const router = express.Router();
const Imagen = require('./models/imagenes');

const image_finder_middleware = require('./middlewares/find_image');

/* /app/ */

router.get('/', function(req, res) {
    res.render("app/home");
});

/* REST */

/* Despliega el form para crear */
router.get("/imagenes/new", function(req, res) {
    res.render("app/imagenes/new");
});

router.all("/imagenes/:id*", image_finder_middleware);

/* Despliega form de imagen existente */
router.get("/imagenes/:id/edit", function(req, res) {
    res.render("app/imagenes/edit");
});

router.route('/imagenes')
    .get((req, res) => {
        Imagen.find({ creator: res.locals.user._id }, function(err, imagenes) {
            if (err) { res.redirect("/app"); return; }
            res.render("app/imagenes/index", { imagenes: imagenes });
        });
    })
    .post((req, res) => {
        let data = {
            title: req.body.title,
            creator: res.locals.user._id
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
        res.render("app/imagenes/show");
    })
    .put((req, res) => {
        res.locals.imagen.title = req.body.title;
        res.locals.imagen.save(function(err) {
            if (!err) {
                res.render("app/imagenes/show");
            } else {
                res.render("app/imagenes/" + req.params.id + "/edit");
            }
        })
    })
    .delete((req, res) => {
        Imagen.deleteOne({ _id: req.params.id }, function(err) {
            if (!err) {
                res.redirect('/app/imagenes');
            } else {
                console.log(err);
                res.redirect("/app/imagenes/" + req.params.id);
            }
        });
    });

/* Exportamos todo el objeto para importarlo en otros js */
module.exports = router;