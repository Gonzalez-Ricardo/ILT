import { Shield, Users, Zap, Clock, Award, Package } from "lucide-react"
import type { ContactClickProps } from "./types";

const advantages = [
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Equipo con trayectoria demostrable en proyectos con gobiernos municipales y estatales",
  },
  {
    icon: Package,
    title: "Servicio Integral 360°",
    description: "Gestión completa: importación, logística, instalación y mantenimiento en un solo proveedor",
  },
  {
    icon: Shield,
    title: "Cumplimiento Garantizado",
    description: "Total apego al marco jurídico mexicano con todas las licencias y permisos necesarios",
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    description: "Personal técnico certificado y capacitado en las últimas tecnologías de iluminación LED",
  },
  {
    icon: Zap,
    title: "Tecnología de Vanguardia",
    description: "Equipamiento moderno y especializado para proyectos de infraestructura de cualquier escala",
  },
  {
    icon: Clock,
    title: "Soporte 24/7",
    description: "Atención continua durante todo el proyecto y servicio post-venta con garantías extendidas",
  },
]

export default function WhyChooseUs({ onContactClick }: ContactClickProps) {
  return (
    <section className="py-16 sm:py-20 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e3e8ef] text-[#42b481] rounded-full font-bold text-sm mb-6">
            VENTAJAS COMPETITIVAS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#42b481] mb-6 leading-tight text-balance">
            Por Qué Somos su
            <br />
            <span className="text-[#42b481]">Mejor Opción</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#42b481] max-w-3xl mx-auto leading-relaxed">
            Combinamos experiencia, tecnología y compromiso para entregar proyectos excepcionales
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((advantage, idx) => {
            const Icon = advantage.icon
            return (
              <div
                key={idx}
                className="group bg-linear-to-br from-white to-[#e3e8ef] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#42b481]/30"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#e3e8ef] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#42b481]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#42b481] mb-3 leading-tight">{advantage.title}</h3>
                <p className="text-black leading-relaxed">{advantage.description}</p>
              </div>
            )
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { value: "100+", label: "Proyectos Completados" },
            { value: "98%", label: "Satisfacción del Cliente" },
            { value: "15+", label: "Municipios Atendidos" },
            { value: "24/7", label: "Soporte Técnico" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#42b481] mb-2">{stat.value}</div>
              <p className="text-sm sm:text-base text-black font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
