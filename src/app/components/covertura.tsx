import { MapPin, Warehouse, Truck, Globe } from "lucide-react"
import type { ContactClickProps } from "./types";

export default function Coverage({ onContactClick }: ContactClickProps) {
  return (
    <section className="py-16 sm:py-20 md:py-20 bg-linear-to-br from-accent bg-[#42b481] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full font-bold text-sm mb-6">
            <Globe className="w-4 h-4" />
            COBERTURA NACIONAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight text-balance">
            Presencia en Toda la
            <br />
            República Mexicana
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Capacidad operativa para establecer presencia en cualquier estado y atender proyectos de cualquier magnitud
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">
          {/* Left: Capabilities */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3">Alcance Nacional</h3>
                  <p className="text-white/80 leading-relaxed">
                    Establecemos sucursales y operamos en distintos puntos del país, adaptándonos a las necesidades
                    regionales de cada proyecto.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shrink-0">
                  <Warehouse className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3">Infraestructura Completa</h3>
                  <p className="text-white/80 leading-relaxed">
                    Contamos con fábricas, talleres, bodegas y oficinas propias para garantizar la ejecución eficiente
                    de proyectos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shrink-0">
                  <Truck className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3">Logística Especializada</h3>
                  <p className="text-white/80 leading-relaxed">
                    Flota propia de transporte con capacidad para manejar proyectos de gran volumen en cualquier
                    ubicación.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Regional focus */}
          <div className="bg-white/95 backdrop-blur rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl text-black">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-6">Especialización Regional</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-primary text-lg">Estado de México</span>
                  <span className="text-sm font-semibold text-accent">Principal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#42b481] rounded-full h-3 " style={{ width: "95%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-primary text-lg">Michoacán</span>
                  <span className="text-sm font-semibold text-accent">Principal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#42b481] rounded-full h-3" style={{ width: "90%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-primary text-lg">Resto del País</span>
                  <span className="text-sm font-semibold text-muted-foreground">En Expansión</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#3a3f47] rounded-full h-3" style={{ width: "70%" }} />
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#3a5582]/10 rounded-2xl border-2 border-[#3a5582]/20">
              <p className="text-primary font-semibold leading-relaxed">
                <span className="font-black text-[#42b481]">Nota:</span> Capacidad para expandir operaciones a cualquier
                región según los requerimientos de nuestros clientes gubernamentales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
