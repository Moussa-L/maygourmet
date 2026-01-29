const express = require('express');

//j'initialise mon application expressJS
const app = express();

// API ROUTE pour la page racine : localhost:3004/
app.get('/', (req, res) => {
    //message à afficher : Bienvenue chez MayGourmet
   res.write("<h1>Bienvenue chez MayGourmet !</h1>");
res.end();
});


app.get('/api/accueil', (req, res) => {
    console.log("hiiiiiiiiii !/api/accueil");

    res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});

    res.write("<p> Bonjour, je suis à l'accueil </p>");
    res.end();
});


/* je define une route qui retourne un message json
app.use((req, res,next) => {
    res.json({message:"hiiiiiiiiii !"});// envoie une réponse sur json
    next();// permet de passer au middleware suivant
});*/

//// je define la route par défaut

/*app.use((req, res, next) => {
    console.log("Bonjour, je suis votre application ExpressJS!");//affiche un message dans le terminal          
    next();// permet de passer au middleware suivant
});*/


module.exports = app;
