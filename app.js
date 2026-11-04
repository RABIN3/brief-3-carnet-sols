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
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) return;

  switch (autresChoix) {
    case '1': {
      const saisie = await demander('Point : ');
      if (saisie === null) return;
      const id = saisie.toLowerCase();
      const observation = trouverParId(observations, id);
      console.log(observation === undefined ? `observation${id} introuvable.` : formaterObservation(observation));
      break;
    }
    case '2': {
      const saisie = await demander('Parcelle : ');
      if (saisie === null) return;
      const parcelle = saisie.toUpperCase();
      const trouvees = filtrerParParcelle(observations, parcelle);
      console.log(`${trouvees.length} observation(s) sur la parcelle ${parcelle} : `);
      console.log(listerObservations(trouvees));
      break;
    }
    case '3': {
      const saisie = await demander('Texture : ');
      if (saisie === null) return;
      const texture = saisie.toLowerCase();
      const trouvees = filtrerParTexture(observations, texture);
      console.log(`${trouvees.length} observation(s) de texture ${texture} : `);
      console.log(listerObservations(trouvees));
      break;
    }
  }
}

//Choix 4 : trier par pH

async function trier(observations) {
  console.log('--------tier------');
  console.log('1. Par pH croissant');
  const sousChoix = await demander('votre choix:');
  if (sousChoix === null) return;
  if (sousChoix === '1') {
    console.log(listerObservations(trierParPh(observations)));
    console.log('choix inconnu: retour au menu');
  } else {
    console.log('Choix inconnu: retour au menu. ');
  }
}

//Coix 5 :  la synthèse

function synthèse(observations) {
  console.log('----synthèse des observations----');
  console.log(`Nombre d'observations : ${observations.length}`);
  const bornes = phMinMax(observations);
  if (bornes === null) {
    console.log('pas de pH minimum et maximum');
  } else {
    console.log(`pH minimum: ${bornes.min}, pH maximum: ${bornes.max}`);
  }
  console.console.log('Observation par texture : ');
  for (const [texture, nombre] of Object.entres(compterParTexture(observations))) {
    console.log(`${texture} : ${nombre}`);
  }
  const phAdiscuter = pointsADiscuter(observations, SEUIL_PH_A_DISCUTER);
  console.log(`Points à discuter(pH < ${SEUIL_PH_A_DISCUTER}) : ${phAdiscuter.length}`);
  for (const observation of phAdiscuter) {
    console.log(`${formaterObservation(observations)}`);
  }
  console.log()


}





async function main() {
  ouvrirSaisie();
  console.log("À compléter : écrivez le menu dans app.js (fiches/3-ajouter-lister.md).");
  fermerSaisie();
}

main();
