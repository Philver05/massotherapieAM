# Massothérapie AM — Site vitrine

Site vitrine professionnel pour **Allyson Marin**, massothérapeute et kinésithérapeute à Matane (Québec).

**Production :** https://massotherapie-allyson.web.app
**Dépôt :** https://github.com/Philver05/massotherapieAM

---

## Stack

- React 18 + Vite 6
- Tailwind CSS v4
- Motion (animations)
- Lucide React (icônes)
- FormSubmit (formulaire certificats, sans backend)
- Firebase Hosting (multi-site sous le projet "atlas-52545")

## Lancer en développement

```bash
npm install
npm run dev
```

→ http://localhost:5173

## Construire et déployer

```bash
npm run build
firebase deploy --only hosting
```

## Structure

```
src/
  components/
    layout/       Nav, Footer, BarreMobile
    sections/     Hero, Tarifs, Politique, Certificats, Avis, APropos, Contact
    ui/           Composants réutilisables (Reveal, SectionTitle, BtnPrimary…)
  config.js       Toutes les données éditables (coordonnées, tarifs, liens, photos)
  App.jsx
  index.css
  main.jsx
public/
  logo.jpg
  photos/         massage.jpg · allyson-portrait.png · local.jpg · carte.jpg
```

## Configuration

Tout ce qui est modifiable est centralisé dans [`src/config.js`](src/config.js) :

| Clé | Description |
|-----|-------------|
| `BUSINESS` | Nom, adresse, téléphone, courriel |
| `LINKS.booking` | URL GOrendezvous |
| `LINKS.avisGoogle` | Lien « Laisser un avis » Google (vide = bouton masqué) |
| `TARIFS` | Tableau des tarifs |
| `POLITIQUE` | Politique d'annulation |
| `AVIS` | Témoignages affichés |
| `PHOTOS` | Chemins des images |

## À faire à la livraison

- [ ] Activer FormSubmit (premier envoi → courriel d'activation chez Allyson)
- [ ] Remplir `LINKS.avisGoogle` avec le lien fiche Google Business
- [ ] Connecter le nom de domaine personnalisé
- [ ] Transférer l'hébergement sur le compte Netlify d'Allyson

---

Développé par Vitro · Philippe Verlain
