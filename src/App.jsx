import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Tarifs from "./components/Tarifs.jsx";
import Politique from "./components/Politique.jsx";
import Certificats from "./components/Certificats.jsx";
import Avis from "./components/Avis.jsx";
import APropos from "./components/APropos.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { LINKS } from "./config.js";

// Barre d'action fixe (mobile seulement)
function BarreMobile() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-blush bg-cream/95 px-4 pt-2.5 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2.5">
        <a
          href={LINKS.booking}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full bg-plum px-4 py-3 text-center text-sm font-semibold text-cream"
        >
          Réserver
        </a>
        <a
          href="#certificats"
          className="flex-1 rounded-full border border-plum/35 px-4 py-3 text-center text-sm font-semibold text-plum"
        >
          Offrir un certificat
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Tarifs />
        <Politique />
        <Certificats />
        <Avis />
        <APropos />
        <Contact />
      </main>
      <Footer />
      <BarreMobile />
    </>
  );
}
