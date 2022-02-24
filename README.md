# GROUPOMANIA 
[![logo](backend/images/icon-above-fontPourReaME.png)](#)

## Projet P7


--------------------- 

* backend with nodejs express, sequelize,sql2

* Frontend with React, Redux, axios.
 * css material ui.
 * sass.

---------------------
## Routes backend

*Listening on port 4000

|    /api      |       routes(Users)            |             |                                |                 |            
| :------------ | :----------------------:|:----------: | :-------------------------------: | --------------------: |
|    POST       |   /user/sign-up         | s'inscrire            |                                   |                       |
|    POST       |   /user/login           | ce connecter            |                                   |                       |
|    PUT        |   /user/:id             | mise a jour user            |                                   |                       |
|    PUT        |   /user/modifname       |             |                                   |                       |
|    PUT        |   /users/profil         |             |                                   |                       |
|    PUT        |   /users/email/         |             |                                   |                       |
|    PUT        |   /users/password/      |             |                                   |                       |
|    DELETE     |   /user/:id             | Supprimer user           |                                   |                       |
|    GET        |   /users                | Obtenir tous les users         |                                   |                       |
|    GET        |   /:userId/profiluser/  | Obtenir un user          |                                   |                       |
|    GET        |   /users/profil/        | Obtenir profil user         |                                   |                       |
|    GET        |  /user/deconnect       | Obtenir profil user         |                                   |                       
|    GET        |   /users/profil/        | Obtenir profil user         |                                   |                       

----------------------

* Veillez décompresser l'archive reçue.

* Dans le terminal intégré , ce placer dans le backend (npm init) et commande nodemon server.

* Dans le terminal intégré , ce placer dans le frontend (npm init) et commande npm start.

* Dans phpMyAdmin (ou autre) créer une base de donnée(nom) et importer la base de donnée dans le fichier backend => Database => mybase.sql.

* Changer le port et users password dans le fichier config => config.json pour la connexion correct à votre base de donnée.

* Un fichier .env.example a étais créé pour faciliter la gestion du point .env, renomer ou créer un fichier .env et rentrer vos données .(j'ai mis les codes ici pour facilité la mise en place pour la soutenance, ces codes seront éffacés par la suite sur mon readMe).

## frontend 

*  REACT_APP_API_URL= http://localhost:4000

## backend

* TOKEN = "drxyctfugvhbujik84hf!!"
* PORT = "4000"

*






