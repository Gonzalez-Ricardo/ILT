"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    municipio: "",
    tipoProyecto: "",
    mensaje: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ nombre: "", correo: "", telefono: "", municipio: "", tipoProyecto: "", mensaje: "" })
    }, 3000)
  }

  return (
    <section id="contacto" className="py-20 sm:py-20 lg:py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6 leading-tight">
            Solicita tu
            <span className="block mt-2 font-normal text-[#42b481]">Cotización</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Estamos listos para iniciar tu proyecto de infraestructura municipal. Contáctanos y recibe una propuesta
            personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#42b481] shadow-sm">
              <h3 className="text-xl sm:text-2xl font-light text-foreground mb-4 sm:mb-6">Información de Contacto</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#42b481]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#42b481]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-muted-foreground mb-1">Teléfono</div>
                    <div className="text-sm sm:text-base text-foreground font-medium">+52 (000) 000-0000</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#42b481]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#42b481]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-[#42b481] mb-1">Email</div>
                    <div className="text-sm sm:text-base text-foreground font-medium break-all">
                      contacto@empresa.mx
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap -4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#42b481]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#42b481]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-muted-foreground mb-1">Ubicación</div>
                    <div className="text-sm sm:text-base text-foreground font-medium">México</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#42b481] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <h4 className="text-lg sm:text-xl font-light mb-3">Horario de Atención</h4>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4">
                Lunes a Viernes: 9:00 AM - 6:00 PM
                <br />
                Sábados: 9:00 AM - 2:00 PM
              </p>
              <div className="pt-3 sm:pt-4 border-t border-white/20">
                <p className="text-xs sm:text-sm text-white/90">
                  Soporte técnico disponible 24/7 para proyectos activos
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#42b481] shadow-sm">
              {submitted ? (
                <div className="text-center py-12 sm:py-16">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#42b481]/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Send className="w-7 h-7 sm:w-8 sm:h-8 text-[#42b481]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-foreground mb-2 sm:mb-3">¡Mensaje Enviado!</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo en breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                        Nombre Completo*
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                        Correo Electrónico*
                      </label>
                      <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="juan@municipio.gob.mx"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Teléfono*</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="+52 (000) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Municipio</label>
                      <input
                        type="text"
                        name="municipio"
                        value={formData.municipio}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="Nombre del municipio"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Tipo de Proyecto*
                    </label>
                    <select
                      name="tipoProyecto"
                      value={formData.tipoProyecto}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Selecciona un tipo de proyecto</option>
                      <option value="alumbrado">Alumbrado Público LED</option>
                      <option value="importacion">Importación de Luminarias</option>
                      <option value="logistica">Logística y Transporte</option>
                      <option value="instalacion">Instalación y Mantenimiento</option>
                      <option value="infraestructura">Infraestructura Completa</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Mensaje*</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none resize-none transition-all"
                      placeholder="Describe tu proyecto y necesidades específicas..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-[#42b481] hover:bg-[#42b481]/90 text-white rounded-lg font-medium text-sm sm:text-base transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-sm hover:shadow-md"
                  >
                    Enviar Solicitud
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Campos requeridos. Tu información será tratada de forma confidencial.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
