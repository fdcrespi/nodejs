"use strict"

const express = require("express");
const app = express();
/*Importo los modelos creados */
const User = require("./models/user").User;
/* manejador de sesiones */
//const session = require("express-session");
/* incorporar la ruta /app */
const router_app = require("./router_app");
/* usar el middleware de session */
const session_middleware = require("./middlewares/session");
/* Para las imagenes */
var formdata = require("express-form-data");

/* Metodo middleware que nos permite utilizar verbos http
 * que no implementa el navegador
 * como DELETE O PUT */
const methodOverride = require("method-override");

/* Alternativas a manejo de sesiones - cookies 
 * Se guardan en el cliente
 */
const cookieSession = require("cookie-session")


app.use("/public", express.static("public"));
//app.use("/estatico", express.static('public'));

/* para leer parametros de un form */
app.use(express.json()); // para peticiones en application/json
app.use(express.urlencoded({ extended: true })); //para peticiones normales con extended le decimos el algoritmo, con true hacemos parsing con mas cosas 

app.use(methodOverride("_method"));

/** para la session */
app.use(cookieSession({
    /* Parametros claves */
    name: "session",
    keys: ["llave-1", "llave-2"]
}));

app.use(formdata.parse({
    keepExtensions: true
}));
/* para que me guarde la extension */
/* keepExtensions: true
})); */

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    console.log(req.session.user_id);
    res.render("index");
});

app.get('/signup', function(req, res) {
    User.find(function(err, doc) {
        console.log(doc);
        res.render("signup");
    });
});

app.get('/login', function(req, res) {
    res.render('login');
})

app.post('/users', function(req, res) {
    let user = new User({
        email: req.body.email,
        password: req.body.password,
        password_confirmation: req.body.password_confirmation,
        username: req.body.username
    });
    //el metodo save, sirve para guardar. Es asyncrono
    //la primera se ejecuta si todo salio bien, la segunda si hubo errores
    user.save().then((us) => {
        res.send("Guardamos el usuario exitosamente");
    }), (err) => {
        if (err) {
            console.log(String(err));
            res.send("No pudimos guardar la informaci??n, verifique la misma");
        };
    }
});

app.post('/sessions', function(req, res) {
    //nos devuelve un arreglo de argumentos que nos devuelve la condicion
    //nos devuelve un alemento q cumple la condicion
    User.findOne({ email: req.body.email, password: req.body.password }, function(err, user) {
        req.session.user_id = user._id;
        res.redirect("/app");
    });
});

app.use("/app", session_middleware);
app.use("/app", router_app);



app.listen(8080);