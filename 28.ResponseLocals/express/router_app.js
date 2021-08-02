"use strict";

const express = require('express');
/* Es un objeto router definido por express para definir rutas */
const router = express.Router();

/* /app/ */

router.get('/', function(req, res) {
<<<<<<< HEAD
    res.render("app/home")
=======
    res.render("app/home");
>>>>>>> 4249b5a70a86483bec16f930458574bcaeb7f027
});

/* Exportamos todo el objeto para importarlo en otros js */
module.exports = router;