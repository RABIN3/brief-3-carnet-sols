// Carnet d'observation des sols — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { HUMIDITES, TEXTURES, ajouterObservation, formaterObservation, listerObservations, trouverParId } from './src/registre.js';
import { filtrerParParcelle, filtrerParTexture, trierParPh } from './src/recherche.js';
import { SEUIL_PH_A_DISCUTER, compterParTexture, phMinMax, pointsADiscuter } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/observations.json';

//------------------------------------Affichage------------------------------------//
function afficherAcceuil() {
  console.log('==========================================================================');
  console.log("CARNET D'OBSERVATION DES SOLS")
  console.log('Ferme pédagogique ')
  console.log('===========================================================================');
}
//------------------------------MENU--------------------------//
function afficherMenu() {
  console.log("1. Ajouter une observation");
  console.log("2. Lister les observations");
  console.log("3. Rechercher(point, parcelle,texture)");
  console.log("4. Trier par pH");
  console.log("5. Synthèse des observations");
  console.log("0. Quitter");
  console.log("Votre choix");
}
//----------------------------Actions-----------------------------//

//Choix 1 : poser les cinq questions, vérifier, ajouter, enrengistrer

async function ajouter(paramsobservations) {
  console.log("------------Ajouter une obsevation-------------");

  const id = await demander('Point observé (ex. S11) :');
  if (id === null) return;
  const parcelle = await demander('Parcelle(ex. P1) :');
  if (parcelle === null) return;
  const texture = await demander(`Texture(${TEXTURES.join(',')}) :  `);
  if (texture === null) return;
  const pH = await demander('pH(nombre de 0 à 14, sans unités, virgule acceptée) : ');
  if (pH = null) return;
  const etatHumidite = await demander(`Etat d'humidité(${HUMIDITES.join(',')}) :`);
  if (etatHumidite === null) return;

  const saisie = {
    id: id.toUpperCase(),
    parcelle: parcelle.toUpperCase(),
    texture: texture.toLowerCase(),
    pH,
    etatHumidite: etatHumidite.toLowerCase(),
  };
  const erreurs = ajouterObservation(observations, saisie);
  if (erreurs.length > 0) {
    console.log('Observation réfusée : ');
    for (const erreur of erreurs) {
      console.log(`  -${erreur}`);
    }
    console.log(`Le canet compte toujours ${observations.length} observation(s)`);
    return;
  }
  await enregistrerJson(FICHIER_DONNEES, observations);
  console.log(`Observation ${saisie.id} ajoutée. le carnet compte ${observation.length} observation`);
}
//Choix 2 : Lister
function lister(observations) {
  console.log(`---- Liste des observations(${observations.length})----`);
  console.log(listerObservations(observations));
}
// Choix 3: rechercher par point, parcelle ou texture.
async function rechercher(observations) {
  console.log(`-------Rechercher------`);
  console.log('1. Par point (identifiant');
  console.log('2. Par parcelle');
  console.log('3. Les observations d"une textures');
  const autresChoix = await demander('Votre choix : ');
  if (autresChoix === null) return;

  switch (autresChoix) {
    case '1': {
      const saisie = await demander('Point : ');
      if (saisie === null) return;
      const id = saisie.toLowerCase();
      const observation = trouverParId();
    }
  }
}




async function main() {
  ouvrirSaisie();
  console.log("À compléter : écrivez le menu dans app.js (fiches/3-ajouter-lister.md).");
  fermerSaisie();
}

main();
