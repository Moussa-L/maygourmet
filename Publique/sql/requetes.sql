--créer la base de données ---
CREATE DATABASE maygourmet; 

--utiliser la base de données créée --

CREATE TABLE equipe (  
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(155) NOT NULL,
    prenom VARCHAR(155) NOT NULL,
    mail VARCHAR(100) NOT NULL,-- ce champ est facultatif
    telephone VARCHAR(100) NOT NULL,
    poste VARCHAR(80) NOT NULL,
    adresse_postale VARCHAR(255),
    presentation VARCHAR(255),
    date_recrutement DATE
);

--afficher les tables existantes --

SHOW TABLES;    


-- Ajouter un membre dans l'équipe --
INSERT INTO equipe (nom, prenom, mail, telephone, poste, adresse_postale, presentation, date_recrutement)
VALUES("Said", "Fatima", "sfatima@example.com", "0123456789", "Gérant", "123 Rue de la Paix, 75000 Paris", "Experte en cuisine traditionnelle", "2023-01-15"),
("Ngoma", "Jean", "jngoma@example.com", "0123456790", "Chef de cuisine", "456 Avenue des Champs-Élysées, 75008 Paris", "Spécialiste des plats traditionnels de la région", "2023-02-10"),
("Doe", "John", "john.doe@example.com", "0123456789", "Chef de projet", "123 Rue de la Paix, 75000 Paris", "Expert en gestion de projets et développement logiciel", "2023-01-15");

--je vais supprimer un membre de l'équipe --
DELETE FROM equipe WHERE id = 3;


update equipe equipe set nom = "Doe", prenom = "Jane" where id = 3;
--mettre à jour les informations d'un membre de l'équipe --
select * from equipe where id = 3;




/*CREATE TABLE plats (  
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Prix_Poulet_roti VARCHAR(155) NOT NULL,
    Prix_Poulet_mariné VARCHAR(155) NOT NULL,
    Prix_Poulet_YASSA VARCHAR(100) NOT NULL,-- ce champ est facultatif
    Prix_Poulet_oignons VARCHAR(100) NOT NULL,
    Prix_Poulet_DG VARCHAR(80) NOT NULL,
    Prix_Poulet_frit VARCHAR(255) NOT NULL,
    Prix_Poulet_Braisé VARCHAR(255) NOT NULL,
    Prix_Poulet_Mafé VARCHAR(100) NOT NULL
    
);*/




CREATE TABLE plat (  
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(155) NOT NULL,
    prix INT NOT NULL,
    quantite VARCHAR(100) NOT NULL,
    ingredient VARCHAR(100) NOT NULL,
    fait_maison BOOLEAN NOT NULL,
    orgine VARCHAR(255) NOT NULL
    
);
--afficher les tables existantes --
SHOW TABLES;

-- Ajouter un plat dans la table plats --
INSERT INTO plat (nom, prix, quantite, ingredient, fait_maison, orgine) VALUES("Poulet roti", 12, "100g", "Poulet", TRUE, "France");
-- je vais afficher mon plat
SELECT * FROM plats;

/*-- Ajouter un plat dans la table plats --
INSERT INTO plats (Prix_Poulet_roti, Prix_Poulet_mariné, Prix_Poulet_YASSA, Prix_Poulet_oignons, Prix_Poulet_DG, Prix_Poulet_frit, Prix_Poulet_Braisé, Prix_Poulet_Mafé) VALUES("Poulet roti", "Poulet mariné ", "Poulet YASSA","Poulet oignons", "Poulet DG","Poulet frit", "Poulet Braisé ", "Poulet Mafé");
--je vais insérer les prix des plats --
UPDATE plats SET Prix_Poulet_roti = "12.00", Prix_Poulet_mariné = "13.00", Prix_Poulet_YASSA = "14.00", Prix_Poulet_oignons = "15.00", Prix_Poulet_DG = "16.00", Prix_Poulet_frit = "17.00", Prix_Poulet_Braisé = "18.00", Prix_Poulet_Mafé = "19.00" WHERE id = 1;**/

CREATE TABLE fournisseur (  
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    ROTI VARCHAR(155) NOT NULL,
    MARINE VARCHAR(155) NOT NULL,
    YASSA VARCHAR(100) NOT NULL,-- ce champ est facultatif
    OIGNONS VARCHAR(100) NOT NULL,
    DG VARCHAR(80) NOT NULL,
    FRIT VARCHAR(255),
    BRAISÉ VARCHAR(255),
    MAFE VARCHAR(100) NOT NULL
    
);

--afficher les tables existantes --
SHOW TABLES;
-- Ajouter un fournisseur dans la table fournisseur --
INSERT INTO fournisseur (ROTI, MARINE, YASSA, OIGNONS, DG, FRIT, BRAISÉ, MAFE) VALUES("roti", " mariné ", " YASSA"," oignons", " DG"," frit", " Braisé ", " Mafé");
--je vais insérer les noms des fournisseurs --
