import { Target, Eye, Shield, CheckCircle2, Sparkles, Heart } from "lucide-react"
import type { ContactClickProps } from "./types";

const values = [
  {
    icon: Shield,
    title: "Confiabilidad",
    description: "Cumplimos compromisos con integridad y transparencia en cada proyecto municipal",
  },
  {
    icon: CheckCircle2,
    title: "Cumplimiento",
    description: "Respeto total a normas y regulaciones legales en todas nuestras operaciones",
  },
  {
    icon: Sparkles,
    title: "Innovación",
    description: "Tecnología LED de vanguardia para optimizar resultados y eficiencia energética",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Dedicación absoluta al éxito de cada proyecto de infraestructura municipal",
  },
]

export default function About({ onContactClick }: ContactClickProps) {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#e8f5ff] text-[#42b481] rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Sobre Nosotros
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6 leading-tight px-4">
            Innovación en Logística
            <span className="block mt-2 font-normal text-[#42b481]">para el Sector Público</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Somos una empresa especializada en soluciones integrales de iluminación municipal, comprometidos con la
            modernización de infraestructura pública en México.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Mission Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#42b481] rounded-xl sm:rounded-2xl" />
            <div className="relative bg-linear-to-b from-[#42b481] to-[#42b481]/90 rounded-xl sm:rounded-2xl p-8 sm:p-10 lg:p-12 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20" />
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6">Nuestra Misión</h3>
                <p className="text-white/95 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Brindar soluciones integrales y confiables en importación, logística y alumbrado público para el
                  sector municipal. Nos posicionamos como aliados estratégicos de gobiernos en proyectos de
                  infraestructura que mejoran la calidad de vida de las comunidades mexicanas.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-8 sm:p-10 lg:p-12 border border-border shadow-sm">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#42b481]/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-[#42b481]" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground mb-4 sm:mb-6">Nuestra Visión</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
              Consolidarnos como el proveedor líder a nivel nacional en soluciones de iluminación municipal, expandiendo
              nuestra cobertura y manteniendo los más altos estándares de calidad, cumplimiento normativo e innovación
              tecnológica en cada proyecto.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-8 sm:p-10 lg:p-12 border border-border shadow-sm">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground mb-3 sm:mb-4">
              Nuestros Valores
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
              Principios que guían cada acción y decisión en nuestra empresa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="group p-5 sm:p-6 rounded-xl border border-[#42b481] hover:border-[#42b481]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#42b481]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#42b481]/20 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#42b481]" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2 text-base sm:text-lg">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}