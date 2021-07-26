"use strict"
/* Middleware para el manejo de sessiones */
module.exports = function(req, res, next) {
    if (!req.session.user_id) {
        res.redirect("/login");
    } else {
        next();
    }
}