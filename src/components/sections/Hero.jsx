import { motion, useReducedMotion } from "motion/react";
import { BadgeCheck, Receipt, Star } from "lucide-react";
import { LINKS, PHOTOS, NOTE_GLOBALE } from "../../config.js";
import { BtnPrimary, BtnGhost, Butterfly } from "../ui";

const MARQUEE = [
  "Massage suédois",
  "Massage sportif",
  "Détente et récupération",
  "Certificats-cadeaux",
  "Reçus d'assurance",
  "Matane",
];

export default function Hero() {
  const reduced = useReducedMotion();
  const enter = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="haut" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-14">
        {/* Colonne texte */}
        <div className="lg:col-span-7">
          <motion.p
            {...enter(0)}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-blush bg-shell/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-plum"
          >
            <Butterfly className="h-4 w-4" />
            Massothérapeute à Matane
          </motion.p>

          <motion.h1
            {...enter(0.08)}
            className="font-display text-[2.6rem] font-medium leading-[1.05] text-plum-deep sm:text-6xl"
          >
            Prendre le temps
            <br />
            de <em className="italic text-plum">se déposer.</em>
          </motion.h1>

          <motion.p {...enter(0.16)} className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft">
            Massages suédois et sportifs par <strong className="font-semibold text-ink">Allyson Marin</strong>,
            massothérapeute et kinésithérapeute diplômée depuis 2019. Un petit local
            chaleureux au cœur de Matane, avec des reçus d'assurance remis pour
            chaque soin.
          </motion.p>

          <motion.div {...enter(0.24)} className="mt-7 flex flex-wrap items-center gap-3">
            <BtnPrimary href={LINKS.booking} target="_blank" rel="noreferrer">
              Réserver un massage
            </BtnPrimary>
            <BtnGhost href="#certificats">Offrir un certificat-cadeau</BtnGhost>
          </motion.div>

          <motion.ul {...enter(0.32)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-plum" aria-hidden="true" />
              Membre RMPQ
            </li>
            <li className="inline-flex items-center gap-2">
              <Receipt className="h-4 w-4 text-plum" aria-hidden="true" />
              Reçus d'assurance
            </li>
            <li className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-current text-plum" aria-hidden="true" />
              {NOTE_GLOBALE.nombre} évaluations 5 étoiles
            </li>
          </motion.ul>
        </div>

        {/* Colonne visuelle : massage en cours */}
        <motion.div {...enter(0.2)} className="relative lg:col-span-5">
          <img
            src={PHOTOS.hero}
            alt="Massage suédois en cours, mains posées sur le dos d'une cliente détendue"
            width="1200"
            height="1800"
            className="aspect-[4/5] w-full rounded-[2rem] rounded-tr-[5.5rem] border border-blush object-cover shadow-[0_24px_60px_-30px_rgba(94,31,53,0.45)]"
          />
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-blush bg-cream px-5 py-3.5 shadow-[0_16px_40px_-20px_rgba(94,31,53,0.4)] sm:-left-6">
            <p className="font-display text-2xl font-medium text-plum">Depuis 2019</p>
            <p className="text-xs text-ink-soft">Massothérapeute diplômée</p>
          </div>
        </motion.div>
      </div>

      {/* Filet défilant */}
      <div className="border-y border-plum/15 bg-plum py-2.5 text-cream" aria-hidden="true">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-8 pr-8">
            {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                <span className="font-display text-sm italic tracking-wide">{item}</span>
                <Butterfly className="h-3.5 w-3.5 text-cream/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
