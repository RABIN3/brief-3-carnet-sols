# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. 
nombre d'observations : 10
pHmini: 4.8 a pour id (S04).
pHmax : 7.6 a pour id (S08).

nombre de texture: -sableux: 3 (S01, S04, S08).
                   -Limoneux: 4 (S02, S05, S07, S100).
                   -Argileux: 3 (S03, S06, S09).
                   pH: 4.8,
                   etatHumidite: sec,
                   texture:sableux,
                   S99: introuvable,

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.


| Action        | Attendu                 | Obtenu                      | Testeur |
| ---           | ---                     | ---                         | ---     |
| ajout valide  |Observation S11 ajoutée |le carnet compte 11 observation | Ghisrock |
| synthèse      |affichage des des differents pH|    reussir                |Ghisrock |
| tri par pH    |  trir avec succès      |         reussir             | Ghisrock    |
| lister les observations |  succès      |         reussir                      |  Ghisrock  | 
|recherche par texture | affichage des différents texture|3 observations de texture |  Ghisrock |


**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
