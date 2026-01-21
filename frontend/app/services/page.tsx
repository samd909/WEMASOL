import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  Settings,
  Wrench,
  BarChart3,
  Home,
  Building2,
  CheckCircle2,
  PlugZap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Ladesäulen & Wallboxen – Wemasol",
  description:
    "Moderne und zukunftssichere Ladesäulen für Elektrofahrzeuge – für Privatkunden, Unternehmen und Gewerbe.",
  keywords: [
    "Ladesäule",
    "Wallbox",
    "Elektromobilität",
    "EV Charging",
    "Ladeinfrastruktur",
    "Lastmanagement",
  ],
}

const services = [
  {
    icon: PlugZap,
    title: "Ladesäulen & Wallboxen",
    description:
      "Wir realisieren moderne und zukunftssichere Ladesäulen für Elektrofahrzeuge – individuell abgestimmt auf private und gewerbliche Anforderungen.",
    features: [
      "Wallboxen für Ein- & Mehrfamilienhäuser",
      "Ladepunkte für Unternehmen & Fuhrparks",
      "Zukunftssichere Hardwarelösungen",
    ],
    delay: "delay-100",
  },
  {
    icon: BarChart3,
    title: "Beratung & Konzeptentwicklung",
    description:
      "Wir analysieren Ihren individuellen Ladebedarf, die vorhandene elektrische Infrastruktur sowie zukünftige Anforderungen.",
    features: [
      "Analyse des Lade- und Nutzungsverhaltens",
      "Berücksichtigung zukünftiger Fahrzeuge",
      "Individuelle Lade- & Nutzungskonzepte",
    ],
    delay: "delay-200",
  },
  {
    icon: Settings,
    title: "Planung & technische Auslegung",
    description:
      "Normgerechte und skalierbare Planung Ihrer Ladeinfrastruktur mit Blick auf Leistung, Lastmanagement und Erweiterbarkeit.",
    features: [
      "Auslegung der Ladeleistung",
      "Intelligentes Lastmanagement",
      "Integration in bestehende Energiesysteme",
    ],
    delay: "delay-300",
  },
  {
    icon: Wrench,
    title: "Installation & Inbetriebnahme",
    description:
      "Die Installation erfolgt über qualifizierte Fachpartner. Wir koordinieren die Umsetzung bis zur betriebsbereiten Übergabe.",
    features: [
      "Installation durch Elektro-Fachbetriebe",
      "Sichere & normkonforme Umsetzung",
      "Fachgerechte Inbetriebnahme",
    ],
    delay: "delay-400",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50/50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-top-8 duration-1000">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full">
                Elektromobilität mit System
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
                Ladesäulen & Wallboxen
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Einfach laden – heute sinnvoll, morgen erweiterbar. Wir begleiten
                Sie von der Planung bis zur Inbetriebnahme Ihrer Ladeinfrastruktur.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4">
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`group relative p-8 border-none bg-white shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 animate-in fade-in slide-in-from-bottom-12 fill-mode-both ${service.delay}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <service.icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed min-h-[60px]">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Target Audience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="flex flex-col p-10 rounded-3xl bg-slate-900 text-white">
                <Home className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Privatkunden</h3>
                <p className="text-slate-400 leading-relaxed">
                  Wallboxen für Ein- und Mehrfamilienhäuser – optimal abgestimmt
                  auf Ihr Fahrzeug, Ihre Immobilie und Ihren zukünftigen Bedarf.
                </p>
              </div>

              <div className="flex flex-col p-10 rounded-3xl bg-white border border-slate-200">
                <Building2 className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Unternehmen & Gewerbe
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ladeinfrastruktur für Mitarbeiter, Kunden und Firmenfahrzeuge –
                  skalierbar, wirtschaftlich und langfristig planbar.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 text-center text-primary-foreground">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Bereit für zukunftssichere Elektromobilität?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-10">
                  Lassen Sie sich unverbindlich beraten – wir entwickeln die
                  passende Lade­lösung für Ihre Anforderungen.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-10 py-6 text-lg font-semibold"
                >
                  <Link href="/contact">Jetzt Beratung anfragen</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
