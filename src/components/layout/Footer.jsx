import { useState } from "react";
import { Instagram, Facebook, X } from "lucide-react";
import { BUSINESS, LINKS, PHOTOS } from "../../config.js";

export default function Footer() {
  const [modalOuvert, setModalOuvert] = useState(false);

  return (
    <footer className="bg-plum-deep pb-24 pt-12 text-cream md:pb-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="flex items-center gap-3 font-display text-xl font-medium">
              <img
                src={PHOTOS.logo}
                alt="Logo Massothérapie AM"
                className="h-11 w-11 rounded-full border border-cream/25 object-cover"
              />
              <span>Massothérapie AM</span>
            </p>
            <p className="mt-3 text-sm text-cream/70">{BUSINESS.address}</p>
            <a
              href={BUSINESS.phoneHref}
              className="mt-1 inline-flex min-h-11 items-center text-sm text-cream/70 hover:text-cream"
            >
              {BUSINESS.phone}
            </a>
          </div>
          <nav aria-label="Liens du pied de page" className="flex flex-wrap items-center gap-x-6 text-sm">
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center text-cream/80 hover:text-cream"
            >
              Réserver
            </a>
            <a href="#certificats" className="inline-flex min-h-11 items-center text-cream/80 hover:text-cream">
              Certificats-cadeaux
            </a>
            <a href="#contact" className="inline-flex min-h-11 items-center text-cream/80 hover:text-cream">
              Contact
            </a>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-cream/80 hover:text-cream"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Instagram
            </a>
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-cream/80 hover:text-cream"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
              Facebook
            </a>
          </nav>
        </div>
        <hr className="my-7 border-cream/15" />
        <div className="flex flex-col justify-between gap-2 text-xs text-cream/50 sm:flex-row">
          <p>© 2026 {BUSINESS.name}. Membre RMPQ, reçus d'assurance disponibles.</p>
          <button
            onClick={() => setModalOuvert(true)}
            className="text-left hover:text-cream/80 underline underline-offset-2"
          >
            Politique de confidentialité
          </button>
        </div>
      </div>

      {modalOuvert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setModalOuvert(false)}
        >
          <div
            className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-cream p-8 text-plum-deep shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOuvert(false)}
              className="absolute right-4 top-4 rounded-full p-1 hover:bg-blush"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="font-display text-xl font-semibold">Politique de confidentialité</h2>
            <p className="mt-1 text-xs text-plum-deep/50">En vigueur depuis le 1er janvier 2025</p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed">
              <section>
                <h3 className="font-semibold">Responsable du traitement</h3>
                <p className="mt-1 text-plum-deep/70">
                  Massothérapie AM (Allyson Marin), 315 rue Fournier, Matane (Québec) G4W 4G1.
                  Courriel : {BUSINESS.email}
                </p>
              </section>

              <section>
                <h3 className="font-semibold">Renseignements collectés</h3>
                <p className="mt-1 text-plum-deep/70">
                  Lors d'une demande de certificat-cadeau, nous collectons votre prénom, votre courriel ou numéro de téléphone, et le message optionnel que vous souhaitez transmettre.
                  Ces renseignements sont utilisés uniquement pour traiter votre demande.
                </p>
              </section>

              <section>
                <h3 className="font-semibold">Témoins (cookies)</h3>
                <p className="mt-1 text-plum-deep/70">
                  Ce site n'utilise pas de témoins de navigation à des fins publicitaires ou de suivi.
                </p>
              </section>

              <section>
                <h3 className="font-semibold">Partage des renseignements</h3>
                <p className="mt-1 text-plum-deep/70">
                  Vos renseignements ne sont jamais vendus ni communiqués à des tiers.
                </p>
              </section>

              <section>
                <h3 className="font-semibold">Vos droits (Loi 25)</h3>
                <p className="mt-1 text-plum-deep/70">
                  Conformément à la Loi modernisant des dispositions législatives en matière de protection des renseignements personnels (Loi 25), vous pouvez demander l'accès, la rectification ou la suppression de vos renseignements en écrivant à {BUSINESS.email}.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
