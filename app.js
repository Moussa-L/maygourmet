const express = require('express');

//j'initialise mon application expressJS
const app = express();

// Configuration du moteur de vue qui doit aller chercher dans le repertoire 'views'
app.set('views', './views');

// nous utilisons EJS pour les vues
app.set('view engine', 'ejs');

// API ROUTE pour la page racine : localhost:3004/
app.get('/', (req, res) => {
    //message à afficher : Bienvenue chez MayGourmet
   res.write("<h1>Bienvenue chez MayGourmet !</h1>");
res.end();
});


app.get('/api/accueil', (req, res) => {
    console.log("hiiiiiiiiii !/api/accueil");

    res.render('acceuil')
    
    /*res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});

    res.write("<p> Bonjour, je suis à l'accueil </p>");
    res.end();*/
});

app.get('/api/equipe', (req, res) => {
    console.log("Mon équipe MayGOURMET /api/equipe"); 
    res.render('equipe') 
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
