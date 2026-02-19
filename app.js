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
});


//APIroute pour supprimer un membre de l'équipe
//Avec la méthode DELETE, je vais supprimer un membre de l'équipe en fonction de son id
//Exenple:localhost:3004/api/equipe/1

app.delete('/api/equipe/:id', (req, res) => {
    const idMembreEquipe = req.params.id;
    /*le point d'interrogation sert a attendre une variables dynamique */
    const queryDelete = "DELETE FROM equipe WHERE id = ?";

    req.getConnection((erreur, connection) => {
        if(erreur) {
            console.log("Erreur de connexion à la base de données : ", erreur);
        } else {
            connection.query(queryDelete , [idMembreEquipe], (err,resultat) => {
                if (err) {
                    console.log("Erreur requete Suppression : ", err);
                } else {
                    console.log("BRAVO! Membre de l'équipe supprimé avec succès : ", resultat);
                    res.status(200).redirect('/api/acceuil');
                }

            });
        }

     });

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
    /*je vais afficher le corps de la requête dans le terminal
    console.log("Le corps de la requête", req.body);
    // je vais afficher le nom du fournisseur dans le terminal
    console.log("Le nom du fournisseur", req.body.nomFounisseur);
    // je vais afficher le responsable du fournisseur dans le terminal
    console.log("Le responsable du fournisseur", req.body.responsableFounisseur);
    // je vais afficher le email du fournisseur dans le terminal
    console.log("Le mail du fournisseur", req.body.mailFournisseur);
    // je vais afficher le telephone du fournisseur dans le terminal
    console.log("Le telephone du fournisseur", req.body.telephoneFounisseur);
    // je vais afficher le adresse du fournisseur dans le terminal
    console.log("Le adresse du fournisseur", req.body.adresseFournisseur);
    // je vais afficher le produit fourni par le fournisseur dans le terminal
    console.log("Le produit fourni par le fournisseur", req.body.produitFournis);
    // je vais afficher le site web du fournisseur dans le terminal
    console.log("Le site web du fournisseur", req.body.presentationFournisseur);
    */

//je suis en train de definire des variables pour stocker les données du fournisseur qui sont envoyées dans le corps de la requête  

    const nomFounisseur = req.body.nomFounisseur;
    const responsableFounisseur = req.body.responsableFounisseur;
    const mailFournisseur = req.body.mailFournisseur;
    const telephoneFounisseur = req.body.telephoneFounisseur;
    const adresseFournisseur = req.body.adresseFournisseur;
    const produitFournis = req.body.produitFournis;
    const presentationFournisseur = req.body.presentationFournisseur;
    

    // je vais me connecter à la base de données MySQL pour ajouter le fournisseur dans la table "fournisseur"
    const requeteSql= "INSERT INTO fournisseur(nom, responsable, mail, telephone, adresse_postale, produit_fournis, presentation) VALUES (?, ?, ?, ?, ?, ? ,?)";
 
    // je vais créer un tableau qui contient les données du fournisseur
    const ordreChamps = [nomFounisseur, responsableFounisseur, mailFournisseur, telephoneFounisseur, adresseFournisseur, produitFournis, presentationFournisseur];

    // je vais appeler la méthode getConnection() pour me connecter à la base de données MySQL
    req.getConnection((erreur, connection) => {
    if(erreur) { // si il y a une erreur de connexion à la base de données, je l'affiche dans le terminal

        } else { // si il n'y a pas d'erreur de connexion à la base de données, je l'affiche dans le terminal

            connection.query(requeteSql, ordreChamps, (err, resultat) => {

                if (err) { // si il y a une erreur dans la requete SQL, je l'affiche dans le terminal

                    console.log("Erreur dans la requete SQL ", err);

                } else { // si il n'y a pas d'erreur dans la requete SQL, je l'affiche dans le terminal

                    console.log("Le fournisseur a été ajouté avec succès ", resultat);

                    // je redirige vers la page d'acceuil

                    res.status(300).redirect('/api/accueil');
        }

    });

    }

});

});
//j'affiche la page fournisseur
app.get('/api/fournisseur', (req, res) => {
    res.render("fournisseur");
});

/* CRUD (Operations): Create, Read, Update, Delete
           METHODES: Create:POST, Read:GET, Update:PUT/PATCH, SUpprimer:DELETE

Create : ajouter un fournisseur dans la table "fournisseur" de la base de données MySQL en utilisant la méthode POST*/

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
