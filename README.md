# Massothérapie AM

Site vitrine commandé par Allyson Marin, massothérapeute à Matane.
J'ai géré tout le projet en solo : conception de l'architecture,
développement des composants, déploiement.

**[Voir le site en ligne](https://massotherapie-allyson.web.app)**

---

## Ce que j'ai fait

Allyson avait besoin d'une présence web professionnelle qu'elle puisse
mettre à jour elle-même. J'ai centralisé toutes les données modifiables
dans un seul fichier de configuration : tarifs, coordonnées, photos, liens.
Elle change ce qu'elle veut sans toucher au code.

Pour les animations, j'ai utilisé Motion pour les entrées au scroll.
Pas d'effets pour le spectacle, juste ce qu'il faut pour que la page
respire et donne une impression de soin.

---

## Stack

| Outil | Rôle |
|---|---|
| React 18 + Vite 6 | Structure et build |
| Tailwind CSS v4 | Styles responsive mobile-first |
| Motion | Animations d'entrée au scroll |
| FormSubmit | Formulaire sans backend |
| Firebase Hosting | Déploiement |

---

## Architecture

```
src/
  components/
    layout/     Nav, Footer, BarreMobile
    sections/   Hero, Tarifs, Politique, Certificats, Avis, APropos, Contact
    ui/         Composants réutilisables
  config.js     Toutes les données éditables centralisées ici
```

---

## Lancer en local

```bash
npm install
npm run dev
```

Développé par Philippe Verlain
