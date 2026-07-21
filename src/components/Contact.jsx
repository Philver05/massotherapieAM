import { MapPin, Phone, Mail, CalendarClock } from "lucide-react";
import { BUSINESS, LINKS } from "../config.js";
import { Reveal, SectionTitle, BtnPrimary } from "./ui.jsx";

const LIGNES = [
  {
    icone: MapPin,
    titre: "Adresse",
    contenu: BUSINESS.address,
    href: LINKS.maps,
    externe: true,
  },
  {
    icone: Phone,
    titre: "Téléphone",
    contenu: BUSINESS.phone,
    href: BUSINESS.phoneHref,
  },
  {
    icone: Mail,
    titre: "Courriel",
    contenu: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
  },
  {
    icone: CalendarClock,
    titre: "Heures",
    contenu: "Sur rendez-vous. Consultez les disponibilités en ligne.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <Reveal>
              <SectionTitle
                kicker="Nous trouver à Matane"
                title={
                  <>
                    Un petit local, <em className="italic">au cœur de la ville.</em>
                  </>
                }
              />
            </Reveal>
            <dl className="mt-7 space-y-5">
              {LIGNES.map((l, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-4">
                    <l.icone className="mt-1 h-5 w-5 shrink-0 text-plum" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                        {l.titre}
                      </dt>
                      <dd className="mt-0.5 text-[0.95rem] font-medium text-ink">
                        {l.href ? (
                          <a
                            href={l.href}
                            {...(l.externe ? { target: "_blank", rel: "noreferrer" } : {})}
                            className="inline-flex min-h-11 items-center underline-offset-4 hover:text-plum hover:underline"
                          >
                            {l.contenu}
                          </a>
                        ) : (
                          l.contenu
                        )}
                      </dd>
                    </div>
                  </div>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={0.24}>
              <BtnPrimary
                href={LINKS.booking}
                target="_blank"
                rel="noreferrer"
                className="mt-8"
              >
                Réserver sur GOrendezvous
              </BtnPrimary>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="h-72 overflow-hidden rounded-[2rem] border border-blush lg:h-full lg:min-h-96">
              <iframe
                src={LINKS.mapsEmbed}
                title="Carte : 315, rue Fournier, Matane"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
