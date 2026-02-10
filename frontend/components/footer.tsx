import Link from "next/link"
import { Sun, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-transparent border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Sun className="h-6 w-6 text-primary" />
              <span className="text-primary">Wemasol</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ihre Experten für nachhaltige Energielösungen und eine grünere Zukunft.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Startseite" },
                { href: "/services", label: "Leistungen" },
                { href: "/ev", label: "E-Mobilität" },
                { href: "/about", label: "Über uns" },
                { href: "/products", label: "Produkte" },
                { href: "/contact", label: "Kontakt" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Ladesäulen & Wallboxen</li>
              <li className="text-sm text-muted-foreground">Beratung & Konzepte</li>
              <li className="text-sm text-muted-foreground">Installation & Inbetriebnahme</li>
              <li className="text-sm text-muted-foreground">Wartung & Service</li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@wemasol.de" className="hover:text-primary transition-colors">
                  info@wemasol.de
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+49" className="hover:text-primary transition-colors">
                  +49 (0) XXX XXXXXXX
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Deutschland</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wemasol. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
