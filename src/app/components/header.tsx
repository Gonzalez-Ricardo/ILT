"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header({ onContactClick }: { onContactClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sectores de Gobierno", href: "#gobierno" },
    { label: "Nosotros", href: "#nosotros" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-light tracking-tight text-foreground">
              <img
                src="/image/ILT Color.png"
                alt="PM Logística"
                className="w-auto h-12 sm:w-auto sm:h-16 lg:w-70 lg:h-16 xl:w-70 xl:h-16"
              />
            </Link>
          </div>

          {/* Desktop Navigation (solo >=1024px) */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button (solo >=1024px) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onContactClick}
              className="px-6 py-2.5 bg-[#42b481] hover:bg-[#42b481]/90 text-white rounded-lg font-medium transition-all"
            >
              Solicitar cotización
            </button>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile / Tablet Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-6 space-y-2 border-t border-border mt-2 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => {
                onContactClick()
                setMobileMenuOpen(false)
              }}
              className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm mt-4"
            >
              Solicitar cotización
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
