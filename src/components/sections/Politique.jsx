import { POLITIQUE } from "../../config.js";
import { Reveal, SectionTitle } from "../ui";

export default function Politique() {
  return (
    <section id="politique" className="scroll-mt-24 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[340px_1fr] lg:gap-14">
          <Reveal>
            <SectionTitle
              kicker="Politique d'annulation et de retard"
              title={
                <>
                  Par respect pour <em className="italic">l'horaire de chacun.</em>
                </>
              }
            />
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Une politique simple et affichée clairement, pour ne plus avoir à
              la chercher dans le fil Facebook.
            </p>
          </Reveal>

          <div>
            <ol className="divide-y divide-blush/70 border-y border-blush/70">
              {POLITIQUE.map((regle, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <li className="flex gap-5 py-4">
                    <span
                      className="font-display text-xl italic leading-none text-rosewood tabular-nums"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.95rem] leading-relaxed text-ink">{regle}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
