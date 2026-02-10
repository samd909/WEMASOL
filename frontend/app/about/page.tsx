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
    "WEMASOL ist Ihr Ansprechpartner für Solaranlagen, Mieterstrom und E-Ladepunkte in Mehrfamilienhäusern. Unabhängig, transparent und koordiniert.",
}

// Cards content
const values = [
  {
    icon: Target,
    title: "Unsere Mission",
    desc: [
      "Energie neu gestalten – nachhaltig, transparent, koordiniert.",
      "Wir unterstützen Immobilieneigentümer und Investoren bei der Umsetzung intelligenter Solaranlagen- und Mieterstromkonzepte.",
      "Als zentraler Ansprechpartner begleiten wir Projekte von der Analyse bis zur langfristigen Betreuung.",
    ],
    delay: "delay-100",
  },
  {
    icon: Leaf,
    title: "Unsere Vision",
    desc: [
      "Eine Energiewelt, in der nachhaltige Lösungen einfach umsetzbar sind.",
      "Erneuerbare Energiekonzepte sollen für Mehrfamilienhäuser selbstverständlich, wirtschaftlich attraktiv und leicht realisierbar sein.",
      "Wir schaffen Zugang durch klare Strukturen, starke Partnerschaften und Transparenz.",
    ],
    delay: "delay-200",
  },
  {
    icon: Award,
    title: "Unsere Rolle & Expertise",
    desc: [
      "Unabhängige Vermittlung zwischen Eigentümern, Investoren und zertifizierten Fachbetrieben.",
      "Koordination und Begleitung von der Idee bis zur Umsetzung.",
      "Technische Ausführung ausschließlich durch geprüfte Partnerbetriebe.",
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
        <section className="py-20">
          <div className="container mx-auto px-4 text-center max-w-2xl animate-in fade-in slide-in-from-top-6 duration-700">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              WEMASOL
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ihr Ansprechpartner für Solaranlagen und E-Ladepunkte in Mehrfamilienhäusern.
              Unabhängig. Transparent. Koordiniert.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((item, idx) => (
                <Card
                  key={idx}
                  className={`group p-8 rounded-3xl border-none bg-white
                  shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]
                  hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]
                  hover:-translate-y-1
                  transition-all duration-500
                  animate-in fade-in slide-in-from-bottom-8 fill-mode-both ${item.delay}`}
                >
                  <div className="flex items-start gap-5">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0
                      group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {item.title}
                      </h3>
                      {item.desc.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-muted-foreground text-sm leading-relaxed mb-2"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Spezialisierung", value: "MFH", icon: ShieldCheck },
              { label: "Unabhängigkeit", value: "100%", icon: Users },
              { label: "Partnernetzwerk", value: "Geprüft", icon: Award },
            ].map((stat, i) => (
              <div
                key={i}
                className="group text-center p-8 rounded-3xl bg-white
                shadow-[0_6px_20px_-8px_rgba(0,0,0,0.15)]
                hover:shadow-[0_14px_30px_-8px_rgba(0,0,0,0.25)]
                transition-all duration-500 hover:-translate-y-1"
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-sm uppercase font-semibold text-primary tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <div className="max-w-xl mx-auto bg-primary/10 rounded-[2.5rem] p-14
            shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]
            animate-in fade-in slide-in-from-bottom-6 duration-700">
            <Users className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Projekt besprechen
            </h2>
            <p className="text-muted-foreground mb-8">
              Wir prüfen Ihr Vorhaben, entwickeln ein wirtschaftliches Energiekonzept
              und begleiten Sie strukturiert bis zur Umsetzung.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-6 text-lg font-semibold
              shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Link href="/contact" className="flex items-center gap-2">
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
