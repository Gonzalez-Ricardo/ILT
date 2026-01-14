"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { ContactClickProps } from "./types";

const carouselImages = [
  { src: "/image/8.png", alt: "Flota de camiones de logística profesional" },
  { src: "/image/11.png", alt: "Infraestructura de iluminación municipal moderna" },
  { src: "/image/13.png", alt: "Transporte logístico profesional" },
  { src: "/image/5.png", alt: "Gestión de infraestructura y equipamiento" },
];

export default function Hero({ onContactClick }: ContactClickProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] sm:min-h-[85vh] overflow-hidden bg-slate-950 scroll-mt-24"
    >
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
      </div>

      {/* Flechas (si quieres solo en sm+, cambia "flex" por "hidden sm:flex") */}
      <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center z-20">
        <button
          onClick={prevSlide}
          className="hidden  p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center z-20">
        <button
          onClick={nextSlide}
          className="hidden p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentSlide ? "w-6 sm:w-8 bg-white" : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl space-y-4 sm:space-y-6 lg:space-y-8 pt-24 sm:pt-28 pb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight text-white">
              Servicios de
              <span className="block mt-1 sm:mt-2 font-semibold text-[#42b481]">
                Importación Logística y Traslado
              </span>
            </h1>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed">
                IMPORTACIÓN LOGÍSTICA Y TRASLADO PM es una empresa mexicana especializada en soluciones integrales para
                gobiernos municipales y estatales.
              </p>
              <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed">
                Ofrecemos servicios de importación directa de luminarias LED certificadas, logística especializada para
                proyectos de infraestructura pública, instalación profesional y soporte técnico continuo.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-6 lg:gap-8 pt-2">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#42b481]">100+</div>
                <div className="text-xs sm:text-sm text-slate-400">Proyectos Ejecutados</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#42b481]">15+</div>
                <div className="text-xs sm:text-sm text-slate-400">Municipios Atendidos</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#42b481]">24/7</div>
                <div className="text-xs sm:text-sm text-slate-400">Soporte Técnico Especializado</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => (window.location.href = "#contacto")}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#42b481] hover:bg-[#42b481]/90 text-white rounded-lg font-medium text-sm sm:text-base transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl"
              >
                Solicitar Cotización
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#servicios"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white rounded-lg font-medium text-sm sm:text-base transition-all backdrop-blur-sm text-center"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
