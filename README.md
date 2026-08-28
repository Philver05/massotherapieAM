# Massothérapie AM — Site vitrine

Site vitrine professionnel pour **Allyson Marin**, massothérapeute et kinésithérapeute à Matane (Québec).

**[→ Voir le site en ligne](https://massotherapie-allyson.web.app)**

---

## Ce que j'ai construit

Site vitrine complet commandé par une cliente réelle : conception, développement, déploiement. Objectif principal — offrir une présence professionnelle simple à maintenir, sans que la cliente ait besoin de toucher au code.

**Décisions clés :**
- Architecture en composants React pour isoler chaque section (Hero, Tarifs, Avis, Contact…)
- Toutes les données éditables centralisées dans `src/config.js` — la cliente met à jour ses tarifs sans toucher au code
- Animations d'entrée au scroll avec Motion pour un rendu premium sans surcharge
- Formulaire sans backend via FormSubmit — zéro coût d'infrastructure

---

## Stack

| Outil | Rôle |
|---|---|
| React 18 + Vite 6 | Framework UI + build rapide |
| Tailwind CSS v4 | Styles utilitaires, responsive mobile-first |
| Motion | Animations d'entrée au scroll |
| Lucide React | Icônes SVG |
| FormSubmit | Formulaire de contact sans backend |
| Firebase Hosting | Déploiement continu |

---

## Architecture

```
src/
  components/
    layout/     Nav, Footer, BarreMobile
    sections/   Hero, Tarifs, Politique, Certificats, Avis, APropos, Contact
    ui/         Reveal, SectionTitle, BtnPrimary (composants réutilisables)
  config.js     Données centralisées (tarifs, coordonnées, photos, liens)
  App.jsx
  main.jsx
```

---

## Lancer en local

```bash
npm install
npm run dev
```

→ http://localhost:5173

---

Développé par Philippe Verlain — Matane, Québec
