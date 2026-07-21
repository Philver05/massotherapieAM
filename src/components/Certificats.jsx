import { useState } from "react";
import { Gift, MessageCircle, Check, Copy, LoaderCircle } from "lucide-react";
import { BUSINESS, LINKS, FORM_ENDPOINT, TARIFS } from "../config.js";
import { Reveal, Butterfly } from "./ui.jsx";

const CHOIX_MONTANT = "montant";

const buildChoixOptions = () => [
  ...TARIFS.map((t) => ({
    value: `${t.service} ${t.duree} (${t.prix})`,
    label: `${t.service} ${t.duree} (${t.prix})`,
  })),
  { value: CHOIX_MONTANT, label: "Montant personnalisé" },
];

const CHAMPS_INIT = {
  deNom: "",
  contact: "",
  choix: "",
  montantPerso: "",
  pourNom: "",
  message: "",
};

function valider(champs) {
  const e = {};
  if (!champs.deNom.trim()) e.deNom = "Indiquez votre nom pour qu'Allyson sache qui écrit.";
  if (!champs.contact.trim())
    e.contact = "Indiquez un courriel ou un téléphone pour vous joindre.";
  if (!champs.choix) e.choix = "Choisissez un soin ou un montant à offrir.";
  if (champs.choix === CHOIX_MONTANT && !champs.montantPerso.trim())
    e.montantPerso = "Indiquez le montant souhaité, par exemple 75 $.";
  if (!champs.pourNom.trim())
    e.pourNom = "Indiquez le nom de la personne qui recevra le certificat.";
  return e;
}

function construireMessage(champs) {
  const choix =
    champs.choix === CHOIX_MONTANT
      ? `Montant personnalisé : ${champs.montantPerso.trim()}`
      : champs.choix;
  return [
    `Demande de certificat-cadeau (${BUSINESS.name})`,
    "",
    `De : ${champs.deNom.trim()}`,
    `Contact : ${champs.contact.trim()}`,
    `Pour : ${champs.pourNom.trim()}`,
    `Soin ou montant : ${choix}`,
    `Message : ${champs.message.trim() || "aucun"}`,
  ].join("\n");
}

export function Champ({ id, label, error, children, optionnel = false }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {optionnel ? (
          <span className="ml-1 font-normal text-ink-soft">(optionnel)</span>
        ) : (
          <span className="ml-0.5 text-plum" aria-hidden="true">*</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-erreur`} className="mt-1.5 text-[0.8rem] font-medium text-plum">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputCls =
  "w-full min-h-11 rounded-xl border border-blush bg-field px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-ink-soft/60 focus:border-plum focus:outline-none";

// Envoi via FormSubmit (gratuit, illimité). En cas d'échec réseau,
// on ouvre un courriel classique prérempli pour ne perdre aucune demande.
export async function envoyerFormulaire(sujet, donnees, corpsTexte) {
  try {
    const r = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: sujet, _template: "table", ...donnees }),
    });
    if (!r.ok) throw new Error(`FormSubmit ${r.status}`);
    return "envoye";
  } catch {
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      sujet
    )}&body=${encodeURIComponent(corpsTexte)}`;
    return "mailto";
  }
}

export default function Certificats() {
  const [champs, setChamps] = useState(CHAMPS_INIT);
  const [erreurs, setErreurs] = useState({});
  const [statut, setStatut] = useState("saisie"); // saisie | envoi | envoye | mailto
  const [copie, setCopie] = useState(false);
  const options = buildChoixOptions();

  const set = (nom) => (ev) => {
    const valeur = ev.target.value;
    setChamps((prev) => ({ ...prev, [nom]: valeur }));
    setErreurs((prev) => (prev[nom] ? { ...prev, [nom]: undefined } : prev));
  };

  const blur = (nom) => () => {
    const e = valider(champs);
    if (e[nom]) setErreurs((prev) => ({ ...prev, [nom]: e[nom] }));
  };

  const props = (nom) => ({
    id: nom,
    value: champs[nom],
    onChange: set(nom),
    onBlur: blur(nom),
    "aria-invalid": erreurs[nom] ? "true" : undefined,
    "aria-describedby": erreurs[nom] ? `${nom}-erreur` : undefined,
  });

  const soumettre = async (ev) => {
    ev.preventDefault();
    const e = valider(champs);
    setErreurs(e);
    if (Object.keys(e).length > 0) {
      document.getElementById(Object.keys(e)[0])?.focus();
      return;
    }
    setStatut("envoi");
    const corps = construireMessage(champs);
    const resultat = await envoyerFormulaire(
      "Demande de certificat-cadeau",
      {
        nom: champs.deNom.trim(),
        contact: champs.contact.trim(),
        pour: champs.pourNom.trim(),
        soin_ou_montant:
          champs.choix === CHOIX_MONTANT
            ? `Montant personnalisé : ${champs.montantPerso.trim()}`
            : champs.choix,
        message: champs.message.trim() || "aucun",
      },
      corps
    );
    setStatut(resultat);
  };

  const versMessenger = async () => {
    const corps = construireMessage(champs);
    try {
      await navigator.clipboard.writeText(corps);
      setCopie(true);
      setTimeout(() => setCopie(false), 3500);
    } catch {
      // Presse-papier indisponible : on ouvre quand même Messenger
    }
    window.open(LINKS.messenger, "_blank", "noopener");
  };

  const envoye = statut === "envoye" || statut === "mailto";

  return (
    <section id="certificats" className="scroll-mt-24 bg-plum py-14 text-cream">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_460px] lg:gap-14 lg:items-stretch">
          {/* Argumentaire : centré verticalement pour équilibrer la hauteur du formulaire */}
          <Reveal className="lg:h-full">
            <div className="flex h-full flex-col justify-center">
              <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-blush">
                <Gift className="h-4 w-4" aria-hidden="true" />
                Certificats-cadeaux
              </p>
              <h2 className="font-display text-3xl font-medium leading-[1.12] sm:text-4xl text-balance">
                Offrez un moment de <em className="italic">détente.</em>
              </h2>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-cream/80">
                Anniversaire, Noël, fête des Mères ou simple merci : le
                certificat-cadeau est valable pour tous les soins. Remplissez la
                demande et Allyson vous répond rapidement pour la remise et le
                paiement.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-cream/85">
                {[
                  "Valable pour tous les massages, peu importe la durée.",
                  "Montant libre ou soin précis, selon votre choix.",
                  "Remis en personne ou préparé pour votre destinataire.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blush" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <Butterfly className="mt-8 hidden h-10 w-10 text-cream/25 lg:block" />
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-cream p-6 text-ink shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)] sm:p-7">
              {envoye ? (
                <div aria-live="polite" className="py-6 text-center">
                  <Check className="mx-auto h-10 w-10 rounded-full bg-plum p-2 text-cream" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-2xl font-medium text-plum-deep">
                    {statut === "envoye" ? "Demande envoyée !" : "Demande préparée !"}
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
                    {statut === "envoye" ? (
                      <>
                        Votre demande est partie par courriel vers{" "}
                        <strong className="font-semibold text-ink">{BUSINESS.email}</strong>.
                        Vous pouvez aussi envoyer la même demande par Messenger :
                      </>
                    ) : (
                      <>
                        Votre logiciel de courriel s'est ouvert avec la demande
                        prête à partir. Vous pouvez aussi l'envoyer par Messenger :
                      </>
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={versMessenger}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-plum px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-plum-deep cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {copie ? "Message copié ! Ouverture en cours" : "Envoyer sur Messenger"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setChamps(CHAMPS_INIT);
                      setStatut("saisie");
                    }}
                    className="mt-3 block w-full text-xs font-medium text-ink-soft underline-offset-2 hover:underline cursor-pointer"
                  >
                    Faire une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={soumettre} noValidate>
                  <h3 className="font-display text-xl font-medium text-plum-deep">
                    Demander un certificat-cadeau
                  </h3>
                  <div className="mt-5 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Champ id="deNom" label="Votre nom" error={erreurs.deNom}>
                        <input type="text" className={inputCls} autoComplete="name" {...props("deNom")} />
                      </Champ>
                      <Champ id="contact" label="Courriel ou téléphone" error={erreurs.contact}>
                        <input type="text" className={inputCls} autoComplete="email" inputMode="email" {...props("contact")} />
                      </Champ>
                    </div>
                    <Champ id="choix" label="Soin ou montant à offrir" error={erreurs.choix}>
                      <select className={inputCls} {...props("choix")}>
                        <option value="">Choisir…</option>
                        {options.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </Champ>
                    {champs.choix === CHOIX_MONTANT && (
                      <Champ id="montantPerso" label="Montant souhaité" error={erreurs.montantPerso}>
                        <input
                          type="text"
                          className={inputCls}
                          placeholder="par exemple 75 $"
                          inputMode="decimal"
                          {...props("montantPerso")}
                        />
                      </Champ>
                    )}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Champ id="pourNom" label="Pour qui ?" error={erreurs.pourNom}>
                        <input type="text" className={inputCls} {...props("pourNom")} />
                      </Champ>
                      <Champ id="message" label="Petit mot" error={undefined} optionnel>
                        <input type="text" className={inputCls} {...props("message")} />
                      </Champ>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={statut === "envoi"}
                    className="mt-6 inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full bg-plum px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-plum-deep active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                  >
                    {statut === "envoi" ? (
                      <>
                        <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Envoi en cours…
                      </>
                    ) : (
                      "Envoyer ma demande"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={versMessenger}
                    className="mt-3 inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full border border-plum/30 px-6 py-2.5 text-sm font-semibold text-plum transition-colors hover:bg-blush/40 cursor-pointer"
                  >
                    {copie ? (
                      <>
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        Message copié ! Collez-le dans Messenger
                      </>
                    ) : (
                      <>
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Ou écrivez-nous sur Messenger
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-xs leading-relaxed text-ink-soft">
                    Votre demande est envoyée par courriel à Allyson. Aucun
                    paiement en ligne : tout se règle directement avec elle.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
