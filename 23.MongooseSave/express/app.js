"use strict"

const express = require("express");
const app = express();
/*Importo los modelos creados */
const User = require("./models/user").User;

app.use("/estatico", express.static('public'));
/* para leer parametros de un form */
app.use(express.json()); // para peticiones en application/json
app.use(express.urlencoded({ extended: true })); //para peticiones normales con extended le decimos el algoritmo, con true hacemos parsing con mas cosas 

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/login', function(req, res) {
    User.find(function(err, doc) {
        console.log(doc);
        res.render("login");
    });
});

app.post('/users', function(req, res) {
    /* Pasos para guardar 
     * 1 - creamos el modelo
     * 2 - le pasamos los campos del schema
     * 3 - Este objeto viene con la BBDD y sus metodos
     * 4 - Con save le decimos a mongoose que vaya a la BBDD y los guarde
     * 5 - La funcion callback, se ejecuta despues de guardarse
     */
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
            res.send("No pudimos guardar la información, verifique la misma");
        };
    }
});


app.listen(8080);