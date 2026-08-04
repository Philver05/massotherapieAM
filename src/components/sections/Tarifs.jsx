import { BadgeCheck, CalendarCheck } from "lucide-react";
import { TARIFS, LINKS } from "../../config.js";
import { Reveal, SectionTitle, BtnPrimary } from "../ui";

// Regroupe les lignes consécutives qui partagent le même "service"
// (ex. les 5 durées de "Massage") pour n'afficher le nom qu'une fois,
// fusionné sur plusieurs lignes (rowSpan), au lieu de le répéter.
function regrouperParService(tarifs) {
  return tarifs.map((t, i) => {
    const memeQuePrecedent = i > 0 && tarifs[i - 1].service === t.service;
    if (memeQuePrecedent) return { ...t, afficherService: false, rowSpan: 1 };
    let portee = 1;
    while (tarifs[i + portee] && tarifs[i + portee].service === t.service) portee++;
    return { ...t, afficherService: true, rowSpan: portee };
  });
}

export default function Tarifs() {
  const lignes = regrouperParService(TARIFS);

  return (
    <section id="tarifs" className="scroll-mt-24 bg-shell/50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionTitle
            kicker="Soins et tarifs, taxes incluses"
            title={
              <>
                Des prix clairs, <em className="italic">toujours à jour.</em>
              </>
            }
          />
          <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:whitespace-nowrap">
            Tarifs en vigueur depuis le <strong className="font-semibold text-ink">9 juin 2026</strong>.
            Les taxes sont incluses : le prix affiché est le prix payé.
          </p>
        </Reveal>

        <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14 lg:items-stretch">
          <Reveal delay={0.08}>
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Tarifs des massages, taxes incluses, en vigueur depuis le 9 juin 2026
              </caption>
              <thead>
                <tr className="border-b border-plum/20 text-xs uppercase tracking-[0.16em] text-ink-soft">
                  <th scope="col" className="py-2.5 pr-3 font-semibold">Soin</th>
                  <th scope="col" className="py-2.5 pr-2 font-semibold">Durée</th>
                  <th scope="col" className="py-2.5 text-right font-semibold">Prix</th>
                </tr>
              </thead>
              <tbody>
                {lignes.map((t, i) => (
                  <tr
                    key={i}
                    className={`border-b border-blush/70 ${t.populaire ? "bg-blush/30" : ""}`}
                  >
                    {t.afficherService && (
                      <td
                        rowSpan={t.rowSpan}
                        className="border-r border-blush/50 py-3.5 pr-3 align-top font-medium text-ink"
                      >
                        {t.service}
                      </td>
                    )}
                    <td className="py-3.5 pl-3 pr-2 text-sm text-ink-soft">
                      {t.duree}
                      {t.populaire && (
                        <span className="ml-2 rounded-full bg-plum px-2.5 py-0.5 text-[0.65rem] font-semibold text-cream">
                          Le plus demandé
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 text-right font-display text-lg font-medium tabular-nums text-plum">
                      {t.prix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          {/* Encadré réservation et assurances : même hauteur que le tableau */}
          <Reveal delay={0.12} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-blush bg-cream p-6 shadow-[0_18px_50px_-30px_rgba(94,31,53,0.35)]">
              <div>
                <BadgeCheck className="h-7 w-7 text-plum" aria-hidden="true" />
                <h3 className="mt-3 font-display text-xl font-medium text-plum-deep">
                  Reçus pour vos assurances
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Allyson est membre <strong className="font-semibold text-ink">RMPQ</strong>.
                  Un reçu officiel de massothérapie vous est remis, et la plupart
                  des assurances collectives remboursent une partie du soin.
                </p>
              </div>
              <div className="mt-auto">
                <hr className="my-5 border-blush" />
                <p className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <CalendarCheck className="mt-0.5 h-4 w-4 shrink-0 text-plum" aria-hidden="true" />
                  L'horaire se remplit plusieurs semaines d'avance, pensez à
                  réserver tôt.
                </p>
                <BtnPrimary
                  href={LINKS.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 w-full"
                >
                  Voir les disponibilités
                </BtnPrimary>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
