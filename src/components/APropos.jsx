import { PHOTOS } from "../config.js";
import { Reveal, SectionTitle } from "./ui.jsx";

export default function APropos() {
  return (
    <section id="apropos" className="scroll-mt-24 bg-shell/50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">
          <Reveal>
            <img
              src={PHOTOS.portrait}
              alt="Allyson Marin, massothérapeute, devant ses diplômes de l'Académie de Massage Scientifique"
              width="677"
              height="828"
              className="aspect-square w-full rounded-[2rem] rounded-bl-[5rem] border border-blush object-cover object-top shadow-[0_24px_60px_-30px_rgba(94,31,53,0.45)]"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <SectionTitle
              kicker="Votre massothérapeute"
              title={
                <>
                  Allyson Marin, <em className="italic">des mains de confiance.</em>
                </>
              }
            />
            <div className="mt-4 max-w-xl space-y-4 text-[0.98rem] leading-relaxed text-ink-soft">
              <p>
                Diplômée depuis 6 ans, Allyson est massothérapeute en{" "}
                <strong className="font-semibold text-ink">massage suédois</strong> et
                kinésithérapeute spécialisée en{" "}
                <strong className="font-semibold text-ink">approche sportive</strong>.
                Que ce soit pour relâcher les tensions du quotidien ou récupérer
                après l'effort, chaque soin est ajusté à vos besoins.
              </p>
              <p>
                Son local de la rue Fournier, qu'elle surnomme «{" "}
                <em className="font-display italic text-plum">ma deuxième maison</em> »,
                est pensé pour que vous vous y sentiez chez vous : calme, propre,
                chaleureux.
              </p>
              <p className="border-l-2 border-plum/30 pl-4 text-sm">
                Allyson est membre RMPQ. Un reçu d'assurance est remis pour
                chaque soin.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
