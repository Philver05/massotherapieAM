import { useState } from "react";
import { MapPin, Phone, Menu, X, Facebook, Instagram } from "lucide-react";
import { BUSINESS, LINKS, PHOTOS } from "../config.js";

const ANCRES = [
  { href: "#tarifs", label: "Soins & tarifs" },
  { href: "#politique", label: "Politique" },
  { href: "#certificats", label: "Certificats-cadeaux" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      {/* Bandeau coordonnées */}
      <div className="hidden bg-plum-deep text-cream/90 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-xs">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {BUSINESS.address}
            </span>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-cream"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {BUSINESS.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-cream"
            >
              <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
              Instagram
            </a>
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-cream"
            >
              <Facebook className="h-3.5 w-3.5" aria-hidden="true" />
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Barre de navigation */}
      <div className="border-b border-blush/70 bg-cream/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5">
          <a href="#haut" className="flex items-center gap-3">
            <img
              src={PHOTOS.logo}
              alt="Logo Massothérapie AM"
              className="h-11 w-11 rounded-full border border-blush object-cover"
            />
            <span className="font-display text-lg font-medium leading-tight text-plum-deep">
              Massothérapie AM
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
            {ANCRES.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-plum"
              >
                {a.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-plum px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-plum-deep"
            >
              Réserver
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-plum lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {open && (
          <nav
            aria-label="Navigation mobile"
            className="border-t border-blush/70 bg-cream px-4 pb-4 pt-2 lg:hidden"
          >
            {ANCRES.map((a) => (
              <a
                key={a.href}
                href={a.href}
                onClick={() => setOpen(false)}
                className="block border-b border-blush/40 py-3 text-sm font-medium text-ink"
              >
                {a.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-1">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex min-h-11 items-center text-sm font-semibold text-plum"
              >
                {BUSINESS.phone}
              </a>
              <div className="flex items-center gap-4">
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center text-plum"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={LINKS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center text-plum"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
