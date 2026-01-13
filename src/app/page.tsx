"use client";

import Header from "./components/header";
import Carrusel from "./components/carrusel";
import Services from "./components/servicios";
import GovernmentSectors from "./components/sector";
import Ventajas from "./components/ventajas";
import Covertura from "./components/covertura";
import Nosotros from "./components/nosotros";
import Contact from "./components/contacto";
import Footer from "./components/footer";

export default function Home() {
  const onContactClick = () => {
    const el = document.getElementById("contacto");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={onContactClick} />
      <Carrusel onContactClick={onContactClick} />
      <Services onContactClick={onContactClick} />
      <GovernmentSectors onContactClick={onContactClick} />
      <Ventajas onContactClick={onContactClick} />
      <Covertura onContactClick={onContactClick} />
      <Nosotros onContactClick={onContactClick} />
      <Contact />
      <Footer onContactClick={onContactClick} />
    </main>
  );
}
