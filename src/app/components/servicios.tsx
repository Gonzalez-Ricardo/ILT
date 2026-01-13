import { Lightbulb, Truck, Package, Hammer, FileText } from "lucide-react"
import Image from "next/image"
import type { ContactClickProps } from "./types";

const services = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Importación de Luminarias LED",
    description:
      "Acceso directo a fabricantes internacionales líderes en tecnología LED. Importamos luminarias de última generación con certificaciones internacionales, garantías extendidas y los mejores precios del mercado. Nuestro equipo gestiona todo el proceso aduanal y cumplimiento normativo.",
    image: "/image/10.png",
    features: ["Certificación Internacional", "Garantía de Fábrica", "Gestión Aduanal Completa"],
  },
  {
    number: "02",
    icon: Truck,
    title: "Logística y Distribución Nacional",
    description:
      "Red logística especializada con cobertura en toda la república mexicana. Flota certificada, rastreo GPS en tiempo real, seguro total de mercancía y entregas programadas garantizadas. Coordinamos desde puerto hasta destino final con total transparencia.",
    image: "/image/7.png",
    features: ["Rastreo GPS en Tiempo Real", "Seguro Total", "Cobertura Nacional"],
  },
  {
    number: "03",
    icon: Hammer,
    title: "Instalación y Obra Civil",
    description:
      "Equipo técnico altamente calificado para instalación completa de proyectos de iluminación. Incluye obra civil, cableado eléctrico, programación de sistemas y puesta en marcha certificada. Cumplimiento de normas NOM y garantía extendida de 5 años en instalación.",
    image: "/image/2.png",
    features: ["Personal Certificado", "Cumplimiento NOM", "Garantía 5 Años"],
  },
  {
    number: "04",
    icon: Package,
    title: "Equipamiento Especializado",
    description:
      "Suministro de maquinaria industrial y equipos complementarios para proyectos de infraestructura de gran escala. Sistemas hidráulicos, herramientas especializadas, refacciones originales y equipamiento de soporte técnico con mantenimiento preventivo incluido.",
    image: "/image/4.png",
    features: ["Equipo Industrial", "Mantenimiento Preventivo", "Refacciones Originales"],
  },
  {
    number: "05",
    icon: FileText,
    title: "Consultoría y Diseño de Proyectos",
    description:
      "Estudios técnicos especializados, análisis de viabilidad y diseño personalizado de proyectos de iluminación municipal. Optimización de costos operativos, maximización de vida útil de infraestructura y auditorías técnicas especializadas para proyectos existentes.",
    image: "/image/1.png",
    features: ["Estudios Técnicos", "Diseño Personalizado", "Auditorías Especializadas"],
  },
]

export default function Services({ onContactClick }: ContactClickProps) {
  return (
    <section id="servicios" className="py-16 sm:py-20 lg:py-20 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
        {/* Section header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <div className="text-xs sm:text-sm font-medium text-accent mb-3 sm:mb-4 tracking-wide uppercase">
            Servicios Integrales
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 leading-tight">
            Soluciones completas de principio a fin
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
            Desde la importación hasta la instalación final, manejamos cada aspecto de su proyecto con excelencia y
            profesionalismo.
          </p>
        </div>

        {/* Services list */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {services.map((service, idx) => {
            const Icon = service.icon
            const isEven = idx % 2 === 0

            return (
              <div
                key={idx}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg?height=500&width=600"}
                      alt={service.title}
                      fill
                      className="object-cover text-black"
                    />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-[#42b481] text-white rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl sm:text-3xl font-light">{service.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-4 sm:space-y-6 ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#42b481]" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
                    {service.features.map((feature, featureIdx) => (
                      <div
                        key={featureIdx}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#f0f0f0] text-black text-xs sm:text-sm font-medium rounded-full"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 sm:mt-24 lg:mt-32">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-linear-to-br from-[#42b481] via-[#3f7c61] to-[#33e997] shadow-2xl">
            <div className="absolute inset-0 bg-[url('/image/9.png')] bg-cover bg-center opacity-10"></div>
            <div className="relative px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
              <div className="max-w-3xl">
                <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-[#3a3f47]/20 text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  Cotización Sin Compromiso
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground mb-4 sm:mb-6 leading-tight">
                  Transforme la infraestructura de su municipio
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-light">
                  Nuestro equipo de expertos está listo para analizar las necesidades específicas de su proyecto y
                  ofrecer una solución integral personalizada con los mejores precios del mercado.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-primary rounded-lg font-medium text-sm sm:text-base transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2">
                    Solicitar Cotización
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white rounded-lg font-medium text-sm sm:text-base transition-all">
                    Agendar Llamada
                  </button>
                </div>
                <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 text-primary-foreground/80 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Respuesta en 24 horas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Sin compromiso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Asesoría gratuita</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
