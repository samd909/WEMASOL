"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Service {
  id: number
  name: string
  slug: string
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [services, setServices] = useState<Service[]>([])

  // Fetch services once
  useEffect(() => {
    fetch("https://api.wemasol.de/api/services/")
    //fetch("http://127.0.0.1:8000/api/services/")
      .then((res) => res.json())
      .then(setServices)
      .catch(console.error)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Sun className="h-6 w-6 text-primary" />
            <span className="text-primary">Wemasol</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 relative">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Startseite
            </Link>

            {/* Services Dropdown */}
            <div className="group relative">
              <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Leistungen
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-sm text-foreground/90 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/ev"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              E-Mobilität
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Über uns
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Kontakt
            </Link>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Kostenlose Beratung</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü öffnen"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Startseite
            </Link>
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {service.name}
              </Link>
            ))}
            <Link href="/ev" className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              E-Mobilität
            </Link>
            <Link href="/about" className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Über uns
            </Link>
            <Link href="/contact" className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Kontakt
            </Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Kostenlose Beratung</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}