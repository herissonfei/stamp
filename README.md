
# Projet full stack: front-end React + back-end Laravel

## Description du projet
Il s'agit d'un site full-stack, une plateforme des enchères de timbres. L'interface frontale de ce projet est construite avec React, offrant une expérience hautement interactive et conviviale. La partie back-end est prise en charge par le framework Laravel et est responsable de la gestion de la logique métier de l'application, des opérations de base de données et des services API.

## Pile technologique
Frontend : react + Back-end : Laravel + base de données : MYSQL

## commencement

### Conditions préalables
- Node.js
- Composer
- PHP >= [versions PHP supportées par Laravel]
- un serveur de base de données

### Exécution du projet
git clone https://github.com/herissonfei/stamp.git

npm install

composer update

les données de la base de données se trouvent dans le dossier de ce chemin resources\data

Copiez et collez le fichier .env.example situé dans le répertoire racine, puis renommez-le en .env. Ensuite, remplissez les informations correspondantes à la base de données dans les zones entourées en rouge.
![图片_20231111014546](https://github.com/herissonfei/stamp/assets/89328999/6357577e-f2dd-4b53-9306-ffd763064cf4)

Ensuite, ouvrez deux terminaux et, dans le répertoire racine, saisissez respectivement 'php artisan serve' et 'npm run dev'.

Après avoir cliqué sur http://127.0.0.1:8000/, vous verrez une erreur. Cliquez sur 'GENERATE APP KEY', puis rafraîchissez la page et le projet devrait démarrer.

![1](https://github.com/herissonfei/stamp/assets/89328999/ce690372-1885-4f40-be72-b55b3709821a)
![2](https://github.com/herissonfei/stamp/assets/89328999/9cc88664-441f-4c48-990c-7d9080a80d31)



## Description
ce projet est un site web d'enchères de timbres.



## Accueil
1: Aller à la page d'inscription.  

2: Aller à la page de connexion.  

3: Aller à la page catalogue pour voir tous les timbres.  

![accueil](https://github.com/herissonfei/stamp/assets/89328999/a29212d3-879c-484c-bacc-bb96d0cf8e6f)
### page d'inscription
![inscription](https://github.com/herissonfei/stamp/assets/89328999/896ffd85-6a43-4373-b0d9-4c7710b37840)
### page de connexion
![connection](https://github.com/herissonfei/stamp/assets/89328999/2029446e-7484-43c7-923d-fb7580bc97b9)

## Catalogue
4: Trier selon différentes options, telles que le prix.  

5: Pagination : vous pouvez afficher la page précédente ou la page suivante ou accéder directement aux timbres d'une certaine page. Chaque page peut afficher jusqu'à 20 enchères de timbres.  

6: Filtrer : filtrer selon différentes conditions (une ou plusieurs).

7: Aller à la page de détails de l'enchères
![catalogue](https://github.com/herissonfei/stamp/assets/89328999/e58d0f3f-1ba0-4179-88d2-2d166903f769)

## Enchères
8: Visualiser un grossissement du timbre et voir qui a enchéri sur cette enchère.

9: Faire une enchère sur des timbres avec surcharge.（en développement）
![detail](https://github.com/herissonfei/stamp/assets/89328999/e10a64d1-481e-41b6-8594-3e9ba123a3e6)

