import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Target, Leaf, Award, Users, ShieldCheck, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Über uns – WEMASOL",
  description:
    "Erfahren Sie mehr über WEMASOL – Ihr Ansprechpartner für Solarlösungen, Mieterstrommodelle und nachhaltige Energiekonzepte.",
  keywords: [
    "WEMASOL",
    "Über uns",
    "Solarenergie",
    "Mieterstrom",
    "Nachhaltige Energielösungen",
    "Photovoltaik",
  ],
}

// Notes for cards
const values = [
  {
    icon: Target,
    title: "Unsere Mission",
    desc: [
      "Wir unterstützen Immobilieneigentümer und Investoren bei modernen Photovoltaik- und Mieterstromkonzepten.",
      "Als zentraler Ansprechpartner verbinden wir Kunden mit qualifizierten Fachpartnern und begleiten Projekte von der Analyse über die Koordination bis zur langfristigen Betreuung.",
      "Wirtschaftlich sinnvolle Energielösungen, transparente Abläufe und verlässliche Zusammenarbeit stehen im Mittelpunkt.",
    ],
    delay: "delay-100",
  },
  {
    icon: Leaf,
    title: "Unsere Vision",
    desc: [
      "Wir streben eine Zukunft an, in der erneuerbare Energiekonzepte für Immobilien selbstverständlich, wirtschaftlich attraktiv und leicht realisierbar sind.",
      "WEMASOL möchte als vertrauenswürdiger Vermittler und Koordinator dazu beitragen, dass Projekte effizient geplant, professionell umgesetzt und langfristig erfolgreich betrieben werden.",
      "Nachhaltige Energie soll zugänglich werden – durch klare Strukturen, starke Partnerschaften und transparente Zusammenarbeit.",
    ],
    delay: "delay-200",
  },
  {
    icon: Award,
    title: "Unsere Expertise",
    desc: [
      "WEMASOL vermittelt zwischen Immobilieneigentümern, Investoren und zertifizierten Fachbetrieben für Solaranlagen und Mieterstrommodelle.",
      "Wir beraten, koordinieren und begleiten Projekte von der Idee bis zur Umsetzung.",
      "Die Installation und technische Ausführung erfolgt ausschließlich durch unsere Partnerbetriebe.",
    ],
    delay: "delay-300",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-slate-50">
        {/* Header */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              WEMASOL
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ihr Ansprechpartner für Solarlösungen, Mieterstrommodelle und nachhaltige Energiekonzepte.
              Wir verbinden Immobilieneigentümer, Investoren und Fachbetriebe – von der Idee bis zur Umsetzung.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((item, idx) => (
                <Card
                  key={idx}
                  className={`p-6 border-none bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 animate-in fade-in fill-mode-both ${item.delay}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white text-primary shadow-sm shrink-0">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      {item.desc.map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground text-sm leading-relaxed mb-2">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Zufriedene Projekte", value: "100+", icon: ShieldCheck },
              { label: "Zufriedene Kunden", value: "98%", icon: Users },
              { label: "Jahre Erfahrung", value: "10+", icon: Award },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl border border-slate-100 bg-white hover:border-primary/20 transition-colors"
              >
                <stat.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <p className="text-sm uppercase font-semibold text-primary">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="max-w-xl mx-auto bg-primary/10 rounded-3xl p-12">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Bereit für Ihr Energieprojekt?</h2>
            <p className="text-muted-foreground mb-6">
              Ob Eigentümer oder Investor – wir begleiten Sie von der ersten Idee bis zur fertigen Solaranlage oder Mieterstromlösung, zuverlässig, transparent und persönlich.
            </p>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8 py-4">
              <Link href="/contact" className="flex items-center gap-2 justify-center">
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
