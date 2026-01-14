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
import WhatsApp from "./components/WhatsApp";

export default function Home() {
  const onContactClick = () => {
    const el = document.getElementById("contacto");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-background">
      <WhatsApp />
      <Header onContactClick={onContactClick} />
      <Carrusel onContactClick={onContactClick} />
      <Services onContactClick={onContactClick} />
      <GovernmentSectors onContactClick={onContactClick} />
      <Covertura onContactClick={onContactClick} />
      <Nosotros onContactClick={onContactClick} />
      <Ventajas onContactClick={onContactClick} />
      <Contact />
      <Footer onContactClick={onContactClick} />
    </main>
  );
}
