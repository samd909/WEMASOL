"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Startseite" },
    { href: "/services", label: "Leistungen" },
    { href: "/ev", label: "E-Mobilität" },
    { href: "/about", label: "Über uns" },
    // { href: "/products", label: "Produkte" },
    { href: "/contact", label: "Kontakt" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Sun className="h-6 w-6 text-primary" />
            <span className="text-primary">Wemasol</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Kostenlose Beratung
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
