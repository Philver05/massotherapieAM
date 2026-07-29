// ─── Coordonnées et liens officiels ──────────────────────────────
export const BUSINESS = {
  name: "Massothérapie AM",
  therapist: "Allyson Marin",
  address: "315, rue Fournier, Matane (Québec) G4W 4G1",
  phone: "(418) 566-9275",
  phoneHref: "tel:+14185669275",
  email: "allymarin31@hotmail.ca",
};

export const LINKS = {
  booking: "https://www.gorendezvous.com/allysonmarin",
  // Page FB "people" sans nom d'utilisateur : le lien Messenger passe par l'ID de page
  messenger: "https://m.me/100092667663833",
  facebook:
    "https://www.facebook.com/people/Massoth%C3%A9rapie-Allyson/100092667663833/",
  instagram: "https://www.instagram.com/massotherapie.allyson/",
  maps: "https://www.google.com/maps?q=315+rue+Fournier,+Matane,+QC+G4W+4G1",
  mapsEmbed:
    "https://www.google.com/maps?q=315+rue+Fournier,+Matane,+QC+G4W+4G1&output=embed",
  // Fiche Google Business pas encore créée (prévue à la livraison).
  // Une fois créée, coller ici le lien "Laisser un avis" exact
  // (search.google.com/local/writereview?placeid=...) : le bouton
  // Google dans la section Avis apparaît automatiquement dès que
  // cette valeur n'est plus vide.
  avisGoogle: "",
};

// ─── Formulaires (FormSubmit : gratuit, envois illimités) ────────
// Chaque formulaire poste en AJAX vers le courriel d'Allyson.
// Au premier envoi, FormSubmit envoie UN courriel d'activation à
// allymarin31@hotmail.ca ; il faut cliquer le lien une seule fois.
// En cas d'échec réseau, le site retombe sur un courriel classique.
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${BUSINESS.email}`;

// ─── Photos ───────────────────────────────────────────────────────
export const PHOTOS = {
  hero: "/photos/massage.jpg",
  portrait: "/photos/allyson-portrait.png",
  local: "/photos/local.jpg",
  carte: "/photos/carte.jpg",
  logo: "/logo.jpg",
};

// ─── Tarifs officiels (taxes incluses, en vigueur le 9 juin 2026) ─
export const TARIFS = [
  { service: "Massage enfant", duree: "30 min", prix: "52 $" },
  { service: "Massage", duree: "30 min", prix: "58 $" },
  { service: "Massage", duree: "45 min", prix: "81 $" },
  { service: "Massage", duree: "60 min", prix: "92 $", populaire: true },
  { service: "Massage", duree: "75 min", prix: "104 $" },
  { service: "Massage", duree: "90 min", prix: "133 $" },
];

// ─── Politique d'annulation (texte officiel de sa page Facebook) ─
export const POLITIQUE = [
  "Les absences et les annulations de dernière minute entraînent des frais de 50 % du montant du rendez-vous.",
  "Toute personne qui ne se présente pas doit acquitter ces frais avant de pouvoir reprendre rendez-vous.",
  "En cas de retard, la durée du massage est réduite afin de respecter l'horaire des autres clients.",
  "Le montant complet du rendez-vous réservé demeure payable, même en cas de retard.",
  "Aucune exception, sauf urgence réelle.",
];

// ─── Avis réels (évaluations GOrendezvous : 222 évaluations, 5/5) ─
export const NOTE_GLOBALE = { note: "5", nombre: 222, source: "GOrendezvous" };

export const AVIS = [
  {
    nom: "Geneviève",
    date: "avril 2025",
    texte: "Ça fait toujours du bien!",
  },
  {
    nom: "Nathalie",
    date: "mars 2025",
    texte: "Allyson est toujours très efficace!",
  },
  {
    nom: "Dany",
    date: "mars 2025",
    texte:
      "Tu es vraiment une bonne masseuse, je te donne 5 étoiles. Continue ton beau travail, merci!",
  },
];
