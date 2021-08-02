"use strict";

const express = require('express');
/* Es un objeto router definido por express para definir rutas */
const router = express.Router();

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

router.route('/')
    .get((req, res) => {

    })
    .post((req, res) => {

    });

router.route('/imagenes/:id')
    .get((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    });

/* Exportamos todo el objeto para importarlo en otros js */
module.exports = router;