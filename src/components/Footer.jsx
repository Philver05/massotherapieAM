import { Instagram, Facebook } from "lucide-react";
import { BUSINESS, LINKS, PHOTOS } from "../config.js";

export default function Footer() {
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
              <span>
                Massothérapie <span className="italic">Allyson</span>
              </span>
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
          <p>
            © 2026 {BUSINESS.name}. Membre RMPQ, reçus d'assurance disponibles.
          </p>
          <p>Site conçu par Vitro, collectif étudiant.</p>
        </div>
      </div>
    </footer>
  );
}
