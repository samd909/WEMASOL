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

// Key points for Mission, Vision, Expertise
const values = [
  {
    icon: Target,
    title: "Unsere Mission",
    desc: "Energie neu gestalten – nachhaltig, transparent, koordiniert. Wir unterstützen Eigentümer und Investoren bei der Umsetzung moderner Photovoltaik- und Mieterstromkonzepte und begleiten Projekte von der Analyse bis zur langfristigen Betreuung.",
    delay: "delay-100",
  },
  {
    icon: Leaf,
    title: "Unsere Vision",
    desc: "Eine Energiewelt, in der nachhaltige Lösungen einfach umsetzbar sind. Wir möchten Photovoltaik- und Mieterstromprojekte effizient planen, professionell umsetzen und langfristig erfolgreich betreiben.",
    delay: "delay-200",
  },
  {
    icon: Award,
    title: "Unsere Expertise",
    desc: "WEMASOL vermittelt zwischen Eigentümern, Investoren und zertifizierten Fachbetrieben. Wir beraten, koordinieren und begleiten Projekte von der Idee bis zur Umsetzung.",
    delay: "delay-300",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="relative py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
                WEMASOL – Ihr <span className="text-primary">Ansprechpartner für Solarlösungen</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                WEMASOL vermittelt zwischen Immobilieneigentümern, Investoren und qualifizierten Fachbetrieben für Solaranlagen und Mieterstrommodelle. Wir beraten, koordinieren und begleiten Projekte von der Idee bis zur Umsetzung. Die Installation und technische Ausführung erfolgt ausschließlich durch unabhängige, zertifizierte Partnerbetriebe.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Expertise */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Users className="h-4 w-4" /> Unsere Philosophie
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Nachhaltige Energielösungen für Immobilien</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Im Mittelpunkt stehen wirtschaftlich sinnvolle Energielösungen, transparente Abläufe und verlässliche Zusammenarbeit.
                  </p>
                  <p>
                    Durch strukturierte Prozesse und ein starkes Partnernetzwerk schaffen wir nachhaltigen Mehrwert für Eigentümer, Investoren und Mieter.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {values.map((item, idx) => (
                  <Card
                    key={idx}
                    className={`p-6 border-none bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 animate-in fade-in slide-in-from-right-8 fill-mode-both ${item.delay}`}
                  >
                    <div className="flex gap-5">
                      <div className="shrink-0">
                        <div className="p-3 rounded-xl bg-white text-primary shadow-sm">
                          <item.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats Section (optional, can keep or update) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {[ 
                { label: "Zufriedene Projekte", value: "100+", icon: ShieldCheck },
                { label: "Zufriedene Kunden", value: "98%", icon: Users },
                { label: "Jahre Erfahrung", value: "10+", icon: Award },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="relative p-10 text-center rounded-3xl border border-slate-100 bg-white hover:border-primary/20 transition-colors animate-in zoom-in-95 duration-700 fill-mode-both"
                  style={{ animationDelay: `${(i + 1) * 150}ms` }}
                >
                  <div className="text-5xl font-black text-slate-900 mb-3">{stat.value}</div>
                  <p className="text-sm uppercase tracking-widest font-bold text-primary">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 p-12 text-center animate-in fade-in duration-1000 fill-mode-both delay-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-50" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <Users className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Bereit für Ihr Energieprojekt?
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Ob Eigentümer oder Investor – wir begleiten Sie von der ersten Idee bis zur fertigen Solaranlage oder Mieterstromlösung, zuverlässig, transparent und persönlich.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90 px-8 py-6 group"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Kontakt aufnehmen
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
