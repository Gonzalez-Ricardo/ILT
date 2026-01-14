import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import type { ContactClickProps } from "./types";

export default function Footer({ onContactClick }: ContactClickProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3a3f47] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ILT LOGÍSTICA </h3>
            <p className="text-white/70 text-sm">
              Soluciones integrales en importación, logística y alumbrado
              público para gobiernos municipales.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-white/70">+52 (000) 000-0000</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-white/70">contacto@pmlogistica.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-white/70">Estado de México, México</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Aviso de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/70 text-sm">
              © {currentYear} IMPORTACIÓN LOGÍSTICA Y TRASLADO PM. Todos los
              derechos reservados.
            </p>
            <p className="text-white/70 text-sm mt-4 md:mt-0">
              Soluciones de confianza para gobiernos municipales
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
