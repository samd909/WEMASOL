import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  PlugZap,
  HelpCircle,
  Sun,
  Wrench,
  Home,
  Building2,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "EV-Charging – einfach, sinnvoll, zukunftssicher | Wemasol",
  description:
    "Individuelle Wallbox- und Ladelösungen für Privatkunden und Unternehmen – zuverlässig, zukunftssicher und regional in NRW & Rheinland-Pfalz.",
  keywords: [
    "EV Charging",
    "Wallbox",
    "Ladesäule",
    "Elektromobilität",
    "Wallbox privat",
    "Wallbox Unternehmen",
  ],
}

export default function EVChargingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50/50">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-top-8 duration-1000">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                EV-Charging
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Einfach laden.<br />Sinnvoll investieren.<br />Zukunftssicher fahren.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sie fahren ein Elektroauto oder planen den Umstieg?  
                Wir sorgen dafür, dass Sie einfach, zuverlässig und kosteneffizient
                zu Hause oder im Unternehmen laden können – in ganz NRW & Rheinland-Pfalz.
              </p>
            </div>
          </div>
        </section>

        {/* Einstieg */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[
                {
                  icon: HelpCircle,
                  title: "Einfach starten",
                  text: "Welche Wallbox passt? Reicht mein Hausanschluss? Wie funktioniert Laden mit Solarstrom?",
                },
                {
                  icon: PlugZap,
                  title: "Wir kümmern uns",
                  text: "Wir prüfen Ihre Voraussetzungen, erklären verständlich und zeigen eine Lösung, die wirklich passt.",
                },
                {
                  icon: CheckCircle2,
                  title: "Sicher & zuverlässig",
                  text: "Normkonform, zukunftssicher und ohne organisatorischen Aufwand für Sie.",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className={`p-8 bg-white border-none shadow-sm animate-in fade-in slide-in-from-bottom-8 fill-mode-both delay-${i * 100}`}
                >
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </Card>
              ))}
            </div>

            {/* Individuelle Lösung */}
            <div className="max-w-4xl mx-auto mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Individuelle Lösung statt Standard-Wallbox
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-10">
                Jede Immobilie ist anders. Deshalb erhalten Sie bei uns keine Lösung
                von der Stange, sondern ein maßgeschneidertes Ladekonzept – abgestimmt auf:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Ihr Fahrzeug", "Ihre Immobilie", "Ihren heutigen & zukünftigen Bedarf"].map(
                  (point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-5 rounded-2xl bg-white shadow-sm"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-medium">{point}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Solar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
              <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
                <Sun className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Laden mit eigenem Solarstrom
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Auf Wunsch kombinieren wir Ihre Ladesäule mit einer Photovoltaikanlage.
                  So laden Sie Ihr Elektroauto bevorzugt mit selbst erzeugtem Strom
                  und senken dauerhaft Ihre Energiekosten.
                </p>
              </div>

              <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
                <Wrench className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Installation durch Fachpartner
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Installation und Inbetriebnahme erfolgen ausschließlich durch
                  qualifizierte Elektro-Fachpartner.  
                  Wir koordinieren den gesamten Ablauf – sicher, normgerecht
                  und termingerecht.
                </p>
              </div>
            </div>

            {/* Zielgruppen */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <Card className="p-10 bg-slate-900 text-white animate-in fade-in slide-in-from-left-8">
                <Home className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Privatkunden</h3>
                <p className="text-slate-400">
                  Wallbox-Lösungen für Ein- und Mehrfamilienhäuser – komfortabel,
                  sicher und jederzeit erweiterbar.
                </p>
              </Card>

              <Card className="p-10 bg-white border border-slate-200 animate-in fade-in slide-in-from-right-8">
                <Building2 className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Unternehmen</h3>
                <p className="text-muted-foreground">
                  Ladepunkte für Mitarbeiter, Kunden oder Firmenfahrzeuge –
                  wirtschaftlich, skalierbar und langfristig planbar.
                </p>
              </Card>
            </div>

            {/* CTA */}
            <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 text-center text-primary-foreground animate-in zoom-in-95 duration-700">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Heute sinnvoll – morgen erweiterbar
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-10">
                  Unsere Lösungen wachsen mit Ihrem Bedarf – z. B. bei einem
                  zweiten Fahrzeug oder steigendem Ladebedarf.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-10 py-6 text-lg font-semibold"
                >
                  <Link href="/contact">Unverbindlich beraten lassen</Link>
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
