import Nav from "./components/layout/Nav.jsx";
import Footer from "./components/layout/Footer.jsx";
import BarreMobile from "./components/layout/BarreMobile.jsx";
import Hero from "./components/sections/Hero.jsx";
import Tarifs from "./components/sections/Tarifs.jsx";
import Politique from "./components/sections/Politique.jsx";
import Certificats from "./components/sections/Certificats.jsx";
import Avis from "./components/sections/Avis.jsx";
import APropos from "./components/sections/APropos.jsx";
import Contact from "./components/sections/Contact.jsx";

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
