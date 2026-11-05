# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ          | Signification             | Type  | Règle de validation          | Unité | Exemple |
| ---            | ---                       | ---   | ---                          | ---   | ---     |
| `id`           |Identifiant unique         |texte  | non vide, absent des données |aucune |S03      |
| `parcelle`     |référence de la parcelle   |texte  |ne doit pas etre vide         |aucune | P2      |
| `Texture`      |texture du sol observé     |texte  |Argileux, sableux, limoneux   |aucune | argileux|
| `pH`           |potentiel d'hydrogène      |nombre |compris entre 0 et 14         |aucune |   3     |
| `etatHUMIDITE` |Humidité du sol            |texte  |Humide, intermediare, sec     |aucune | Humide  |

**Listes de valeurs autorisées** : ✏️

**Sources** : ✏️
