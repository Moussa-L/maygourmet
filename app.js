const express = require('express');

//j'ai importer le pilote MYSQL2 utilisé pour interroger la base de données MySQL
const mysql2 = require('mysql2');



//Middleware pour se connecter à la base de données MySQL
//"pool" est la stratégie de connexion à la base de données 
const myConnection = require('express-myconnection');


//j'initialise mon application expressJS
const app = express();

app.use(express.json()); // pour pouvoir lire le corps de la requete en json
app.use(express.urlencoded({extended: true})); // pour pouvoir lire le corps de la requete en urlencoded


// je crée une connexion à la base de données MySQL
const optionsConnexionBaseDeDonnees = {
    host: "localhost",
    user:"root",
    password: "Lidyamoussa2907!",
    database: "maygourmet",
    port: 3306
};

//je dis à mon application expressJS d'utiliser le middleware myConnection pour se connecter à la base de données MySQL
app.use(myConnection(mysql2, optionsConnexionBaseDeDonnees, "pool"));

//const = require('express');

// Configuration du moteur de vue qui doit aller chercher dans le repertoire 'views'
app.set('views', './views');

// nous utilisons EJS pour les vues
app.set('view engine', 'ejs');


// Je précise que je vais utiliser un dossier qui s'appelle 'public' pour les fichiers statiques (css, images, js côté client)
app.use(express.static('Publique'));



// API ROUTE pour la page racine : localhost:3004/
app.get('/', (req, res) => {
    //message à afficher : Bienvenue chez MayGourmet
   res.write("<h1>Bienvenue chez MayGourmet !</h1>");
res.end();
});



app.get('/api/accueil', (req, res) => {
    console.log("hiiiiiiiiii !/api/accueil");

    res.render('acceuil');
    
    /*res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});

    res.write("<p> Bonjour, je suis à l'accueil </p>");
    res.end();*/
});

app.get('/api/equipe', (req, res) => {
    console.log("hiiiiiiiiii !/api/equipe");
    req.getConnection((erreur, connection) => {
        if(erreur) {
            console.log(erreur);
        } else {
            connection.query("SELECT * FROM equipe", [], (err, resultatEquipe) => {
                if (err) {
                    console.log("Erreur dans la requete SQL ", err);
                } else {
                    console.log("Mon équipe : ", resultatEquipe);
                    res.render("equipe", {resultatEquipe});
                }
            });

        }
    });

});

/*
app.get('/api/equipe', (req, res) => {

    console.log("Mon équipe MayGOURMET /api/equipe");  

    //je me connecte à la base de données MySQL grace a la methode getConnection()
    req.getConnection((erreur, connection) => {
        if(erreur) { //si il y a une erreur de connexion à la base de données, je l'affiche dans le terminal
            console.log( erreur);
        } else { //si il n'y a pas d'erreur de connexion à la base de données, je l'affiche dans le terminal
            connection.query("SELECT * FROM equipe", [], (err, resultatEquipe) => {
                if (err) {
                    console.log("Erreur dans la requete SQL ", err);
                } else {
                    console.log("Mon équipe : ", resultatEquipe);
                  
                }
});  */   

/*app.get("/api/equipe", (req, res) => {
    console.log("Mon équipe MayGOURMET /api/equipe");  

    /je me connecte à la base de données MySQL grace a la methode getConnection()
    req.getConnection((erreur, connection) => {
        //si il y a une erreur de connexion à la base de données, je l'affiche dans le terminal
        if(erreur) { 
            console.log( erreur);
            //si il n'y a pas d'erreur de connexion à la base de données, je l'affiche dans le terminal
        } else {
            //il vas recupérer les membres de l'équipe dans la table "equipe" de la base de données MySQL et les afficher dans le terminal
            connection.query("SELECT * FROM equipe", [], (err, resultatEquipe) => {
                if (err) {
                    console.log("Erreur dans la requete SQL ", err);
                } else {
                    console.log("Mon équipe : ", resultatEquipe);
                }
            });
        }
     
});*/
//res.render('equipe');
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

//j'ajoute un fournisseur dans la table "fournisseur" de la base de données MySQL en utilisant la méthode POST
app.post('/api/fournisseur', (req, res) => {
    console.log("Le corps de la requête", req.body);

});

//j'affiche la page fournisseur
app.get('/api/fournisseur', (req, res) => {
    res.render("fournisseur");
});



/*app.get('/api/fournisseur', (req, res) => {
    console.log("hiiiiiiiiii !/api/fournisseur");
    req.getConnection((erreur, connection) => {
        if(erreur) {
            console.log(erreur);
        } else {
            connection.query("SELECT * FROM fournisseur", [], (err, resultatFournisseur) => {
                if (err) {
                    console.log("Erreur dans la requete SQL ", err);
                } else {
                    console.log("Mes fournisseurs : ", resultatFournisseur);
                    res.render("fournisseur", {resultatFournisseur});
                }
            });

        }
    });

});*/

/*j'ajoute un plat dans la table "plat" de la base de données MySQL en utilisant la méthode POST   
   app.post('/api/acceuil', (req, res) => {

});*/



module.exports = app;
