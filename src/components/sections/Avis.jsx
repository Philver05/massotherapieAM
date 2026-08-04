import { Star } from "lucide-react";
import { AVIS, NOTE_GLOBALE, LINKS } from "../../config.js";
import { Reveal, SectionTitle, Butterfly, BtnPrimary, BtnGhost } from "../ui";

function Etoiles({ note, className = "" }) {
  return (
    <div className={`flex gap-0.5 text-plum ${className}`} aria-label={`${note} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, j) => (
        <Star
          key={j}
          className={`h-3.5 w-3.5 ${j < note ? "fill-current" : "opacity-30"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Avis() {
  return (
    <section id="avis" className="scroll-mt-24 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            kicker="Ce que les clientes et clients en disent"
            title={
              <>
                <em className="italic">{NOTE_GLOBALE.nombre} évaluations</em>, 5 étoiles sur 5.
              </>
            }
          />
          <a
            href={LINKS.booking}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-plum underline-offset-4 hover:underline"
          >
            <Etoiles note={5} />
            Voir sur {NOTE_GLOBALE.source}
          </a>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {AVIS.map((avis, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <figure className="flex h-full flex-col rounded-3xl border border-blush bg-shell/60 p-6">
                <Etoiles note={5} />
                <blockquote className="mt-4 flex-1">
                  <p className="font-display text-[1.05rem] italic leading-relaxed text-ink">
                    « {avis.texte} »
                  </p>
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between gap-2 text-sm">
                  <span className="inline-flex items-center gap-2 font-semibold text-plum">
                    <Butterfly className="h-4 w-4 text-rosewood" />
                    {avis.nom}
                  </span>
                  <span className="text-xs text-ink-soft">{avis.date}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.21} className="mt-6 rounded-3xl border border-blush bg-shell/60 p-6 text-center">
          <h3 className="font-display text-lg font-medium text-plum-deep">
            Vous avez été suivie par Allyson ?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
            Partagez votre expérience directement sur GOrendezvous
            {LINKS.avisGoogle ? " ou sur Google" : ""}.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <BtnPrimary href={LINKS.booking} target="_blank" rel="noreferrer">
              Laisser un avis sur GOrendezvous
            </BtnPrimary>
            {LINKS.avisGoogle && (
              <BtnGhost href={LINKS.avisGoogle} target="_blank" rel="noreferrer">
                Laisser un avis Google
              </BtnGhost>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
