import { motion, useReducedMotion } from "motion/react";

// Révélation douce au scroll — respecte prefers-reduced-motion
export function Reveal({ children, delay = 0, y = 18, className = "" }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Papillon monoline — clin d'œil au logo (mains/papillon)
export function Butterfly({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M23 13C19 5 7 2 4.5 8c-2.5 6 6 14.5 17.5 13" />
      <path d="M25 13c4-8 16-11 18.5-5 2.5 6-6 14.5-17.5 13" />
      <path d="M22.5 21c-8 2.5-13 9.5-9.5 13 3.5 3.5 9.5-2 11-9.5" />
      <path d="M25.5 21c8 2.5 13 9.5 9.5 13-3.5 3.5-9.5-2-11-9.5" />
      <path d="M24 11v20" />
      <path d="M22 9c-1.5-2.5-3.5-4-5.5-4.5" />
      <path d="M26 9c1.5-2.5 3.5-4 5.5-4.5" />
    </svg>
  );
}

export function Kicker({ children, className = "" }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.22em] text-rosewood ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({ kicker, title, className = "" }) {
  return (
    <div className={className}>
      {kicker && <Kicker className="mb-2">{kicker}</Kicker>}
      <h2 className="font-display text-3xl sm:text-4xl font-medium text-plum-deep leading-[1.12] text-balance">
        {title}
      </h2>
    </div>
  );
}

export function BtnPrimary({ as: Tag = "a", className = "", children, ...props }) {
  return (
    <Tag
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-plum px-6 py-2.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-plum-deep active:scale-[0.98] cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function BtnGhost({ as: Tag = "a", className = "", children, ...props }) {
  return (
    <Tag
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-plum/35 px-6 py-2.5 text-sm font-semibold text-plum transition-colors duration-200 hover:border-plum hover:bg-blush/40 active:scale-[0.98] cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
