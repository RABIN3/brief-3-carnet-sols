# Carnet d'observation des sols

> Projet individuel du SAS DFS, brief 3 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

✏️ *En cinq à huit phrases : qui utilise l'outil (son métier, son geste professionnel), son besoin, ce qu'il saisit, ce que le programme lui affiche, ce que l'outil ne fait pas.*
l'outil est utilisé par l'équipe pédagogique de la ferme connectée, son geste professionnel est d'observer un point avec la fiche de terrain, renseigner une classe de texture et une valeur de pH, puis relier ces observations aux interactions entre l'eau, le sol et la plante. Le programme affiche les relevés sur le pH, la texture du sol et l'état d'humidité du sol à l'aide de l'id du sol. Il ne peut produire de diagnostic de fertilisation ni de moyenne de pH.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-3-carnet-sols.git
cd brief-3-carnet-sols
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [x] Données lues et enregistrées dans `donnees/observations.json`
- [x] Ajouter une observation, saisies invalides refusées sans arrêter le programme
- [x] Lister les observations, message si le carnet est vide
- [x] Rechercher par point ou par parcelle ; filtrer par texture
- [x] Trier par pH
- [x] Synthèse : pH minimum et maximum, nombre par texture, points à discuter (pH < 5,5)
- [x] Bonus : supprimer et modifier une observation (choix 6 et 7)
- [x] Bonus : tri par pH décroissant, texture la plus fréquente

## Données

✏️ *Le fichier, le nombre d'observations, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), le pH sans unité. Rappelez qu'elles sont fictives.*
 Fichier: observations.json
 nombre d'observations: 10
 Champs: Textures, etatHumidite, pH
## Limites
le carnet donne pas de statistique sur la recolte.
le carnet ne previent pas interpreter à lui seul un diagnostique.


## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Prénom NOM, compte GitHub. Entraide : avec qui, sur quoi.*
Prenoms : Kouamé Rabin-junior, Nom: KOKO
Entraide : OBA Ghislain (sur des erreurs de synthaxe)
           Adimoi Angaman jules- Christ (fonction verifierObservation)
            