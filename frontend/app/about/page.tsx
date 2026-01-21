import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  Target,
  Heart,
  Award,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Über uns – Wemasol",
  description:
    "Erfahren Sie mehr über Wemasol – Ihr Partner für zukunftssichere Ladeinfrastruktur, Elektromobilität und nachhaltige Energielösungen.",
  keywords: [
    "Wemasol",
    "Über uns",
    "Elektromobilität",
    "Ladesäulen Anbieter",
    "Wallbox Experte",
    "Energie Lösungen",
  ],
}

const values = [
  {
    icon: Target,
    title: "Unsere Mission",
    desc: "Elektromobilität einfach, sinnvoll und zukunftssicher machen – mit durchdachten Lade- und Energielösungen für Privatkunden und Unternehmen.",
    delay: "delay-100",
  },
  {
    icon: Heart,
    title: "Unsere Werte",
    desc: "Qualität, Transparenz und Verlässlichkeit. Wir planen jede Lösung so, als wäre sie für unser eigenes Zuhause oder Unternehmen.",
    delay: "delay-200",
  },
  {
    icon: Award,
    title: "Unsere Expertise",
    desc: "Erfahrene Energie- und Elektromobilitäts-Experten mit technischem Know-how und einem klaren Blick für praktikable Lösungen.",
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
                Wir gestalten die <span className="text-primary">Mobilität von morgen</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Wemasol ist mehr als ein Technikdienstleister.  
                Wir sind ein engagiertes Team aus Energie- und Elektromobilitäts-Experten,
                das nachhaltige Ladeinfrastruktur einfach und verständlich macht.
              </p>
            </div>
          </div>
        </section>

        {/* Story & Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Zap className="h-4 w-4" /> Unsere Geschichte
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Elektromobilität verständlich gemacht
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Wemasol wurde mit dem Ziel gegründet, Elektromobilität für alle
                    zugänglich zu machen – ohne komplizierte Technik, Unsicherheit
                    oder unklare Kosten.
                  </p>
                  <p>
                    Was als fokussierte Energieberatung begann, entwickelte sich zu
                    einem ganzheitlichen Anbieter für Ladeinfrastruktur, Wallboxen
                    und intelligente Energielösungen.
                  </p>
                  <p>
                    Heute unterstützen wir Privatkunden und Unternehmen dabei,
                    ihre Fahrzeuge zuverlässig, wirtschaftlich und zukunftssicher
                    zu laden – abgestimmt auf reale Anforderungen.
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
                        <h3 className="text-xl font-bold mb-2 text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {[
                { label: "Realisierte Ladepunkte", value: "500+", icon: ShieldCheck },
                { label: "Zufriedene Kunden", value: "98%", icon: Heart },
                { label: "Jahre Erfahrung", value: "10+", icon: Award },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="relative p-10 text-center rounded-3xl border border-slate-100 bg-white hover:border-primary/20 transition-colors animate-in zoom-in-95 duration-700 fill-mode-both"
                  style={{ animationDelay: `${(i + 1) * 150}ms` }}
                >
                  <div className="text-5xl font-black text-slate-900 mb-3">
                    {stat.value}
                  </div>
                  <p className="text-sm uppercase tracking-widest font-bold text-primary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 p-12 text-center animate-in fade-in duration-1000 fill-mode-both delay-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-50" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <Users className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Bereit für den nächsten Schritt?
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Wir begleiten Sie von der ersten Idee bis zur fertigen
                  Ladeinfrastruktur – zuverlässig, transparent und persönlich.
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
