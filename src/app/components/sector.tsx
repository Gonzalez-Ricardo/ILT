import { Building2, Landmark, Award, FileCheck, Users, Shield } from "lucide-react"
import type { ContactClickProps } from "./types";

export default function GovernmentSectors({ onContactClick }: ContactClickProps) {
  return (
    <section id="gobierno" className="py-16 sm:py-20 md:py-20 bg-linear-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e3e8ef] text-[#42b481] rounded-full font-bold text-sm mb-6">
            SECTOR PÚBLICO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-6 leading-tight text-balance">
            Aliados Estratégicos del
            <br />
            <span className="text-[#42b481]">Gobierno</span>
          </h2>
          <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Proveedor confiable y certificado para entidades gubernamentales en los tres niveles de gobierno, con experiencia en proyectos de infraestructura, cumplimiento normativo y ejecución transparente.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-300 hover:border-accent/30">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#e3e8ef] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#42b481]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#42b481] mb-3">Gobiernos Municipales</h3>
            <p className="text-black leading-relaxed mb-4">
              Socio estratégico para proyectos de alumbrado público e infraestructura urbana en municipios de toda la República Mexicana.
            </p>
            <div className="text-sm font-bold text-[#42b481]">15+ Municipios Atendidos</div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-300 hover:border-accent/30">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#e3e8ef] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Landmark className="w-7 h-7 sm:w-8 sm:h-8 text-[#42b481]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#42b481] mb-3">Gobiernos Estatales</h3>
            <p className="text-black leading-relaxed mb-4">
              Experiencia comprobada en proyectos de gran escala a nivel estatal, con procesos alineados a normatividad, licitaciones y control administrativo.
            </p>
            <div className="text-sm font-bold text-[#42b481]">3+ Estados Colaborando</div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-300 hover:border-accent/30">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#e3e8ef] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7 sm:w-8 sm:h-8 text-[#42b481]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#42b481] mb-3">Organismos Descentralizados</h3>
            <p className="text-black leading-relaxed mb-4">
              Colaboramos con fideicomisos, organismos públicos y empresas estatales, garantizando transparencia, trazabilidad y cumplimiento contractual.
            </p>
            <div className="text-sm font-bold text-[#42b481]">5+ Organismos Asociados</div>
          </div>
        </div>

        {/* Compliance section */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-300">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#42b481] mb-6">
                Cumplimiento Legal Garantizado
              </h3>
              <p className="text-black mb-8 leading-relaxed text-base sm:text-lg">
                Cumplimos con todos los requisitos legales, administrativos y fiscales para operar como proveedores y contratistas del sector público en México, contando con los registros, certificaciones y autorizaciones ante las autoridades competentes.
              </p>

              <div className="space-y-4">
                {[
                  { icon: FileCheck, text: "Registro vigente en CompraNet y padrones de proveedores federales, estatales y municipales" },
                  { icon: Shield, text: "Certificaciones de calidad y cumplimiento de normas nacionales e internacionales" },
                  { icon: Users, text: "Experiencia comprobable en contratación pública y ejecución de proyectos gubernamentales" },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#e3e8ef] rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#42b481]" />
                      </div>
                      <span className="text-black font-semibold leading-relaxed pt-1.5">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative h-64 md:h-auto bg-linear-to-br from-[#42b481] to-[#42b481] p-8 sm:p-10 lg:p-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/image/6.png')] bg-cover bg-center opacity-10"></div>
              <div className="text-center text-white">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4">100%</div>
                <div className="text-xl sm:text-2xl font-bold mb-2">Cumplimiento Legal</div>
                <div className="text-white/80 text-sm sm:text-base">Certificado y Verificado</div>
              </div>
              <div className="absolute top-6 right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-6 left-6 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
