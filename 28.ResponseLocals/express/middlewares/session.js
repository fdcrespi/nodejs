"use strict"
<<<<<<< HEAD
const User = require("../models/user").User;
=======
const User = require('../models/user').User;
>>>>>>> 4249b5a70a86483bec16f930458574bcaeb7f027

/* Middleware para el manejo de sessiones */
module.exports = function(req, res, next) {
    if (!req.session.user_id) {
        res.redirect("/login");
    } else {
        User.findById(req.session.user_id, function(err, user) {
            if (err) {
                console.log(err);
                res.redirect("/login");
            } else {
<<<<<<< HEAD
                /* Con locals lo que hacer es hacer merge con lo q tenga res en cada vista */
                res.locals = {
                    user: user
                }
=======
                res.locals = { user: user };
>>>>>>> 4249b5a70a86483bec16f930458574bcaeb7f027
                next();
            }
        });
    }
}