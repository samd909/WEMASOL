import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Sun, Leaf, Zap, Shield, TrendingUp, Users, ArrowRight, Building, Layers, Handshake } from "lucide-react";
import { ProductList } from "@/components/product-list";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-white">
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-top-8 duration-1000">


          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-black">
            Mehr wirtschaftlicher Nutzen <br />
            aus Ihrem Wohnungsbestand
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Wir verbinden Eigentümer von Mehrfamilienhäusern mit erfahrenen Fachbetrieben
            für Solaranlagen mit Mieterstrom oder gemeinsamer Gebäudeversorgung sowie
            E-Ladepunkte für Parkplätze.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-6 text-lg font-semibold hover:scale-105 transition-all shadow-md"
            >
              <Link href="/contact">➡ Jetzt Projekt prüfen lassen</Link>
            </Button>
          </div>
        </div>
      </div>
      </section>


{/* Features Section */}
{/* Features Section */}
<section className="py-24 border-t border-slate-50 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16 animate-in fade-in duration-700">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
        Wer ist WEMASOL & was wir tun
      </h2>
      <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: Users,
          title: "Wer wir sind",
          text: "Unabhängiges Vermittlungsunternehmen mit Fokus auf Mieterstrom für Mehrfamilienhäuser und E-Ladepunkte. Wir stehen für Transparenz, Neutralität und Qualität.",
          delay: "delay-100",
        },
        {
          icon: Handshake,
          title: "Was wir machen",
          text: "WEMASOL ist Ihr unabhängiger Vermittlungspartner für nachhaltige Energielösungen. Wir bringen Eigentümer mit geprüften Fachbetrieben zusammen – einfach, strukturiert und unverbindlich.",
          delay: "delay-200",
        },
        {
          icon: Sun,
          title: "Solaranlagen für Mehrfamilienhäuser",
          text: "Mieterstrom oder gemeinschaftliche Gebäudeversorgung – optimal abgestimmt auf Mehrfamilienhäuser und wirtschaftlich sinnvoll umgesetzt.",
          delay: "delay-300",
        },
        {
          icon: Zap,
          title: "E-Ladepunkte",
          text: "Ladelösungen für Tiefgaragen und Außenstellplätze inklusive passender Konzepte für Mehrfamilienhäuser.",
          delay: "delay-400",
        },
        {
          icon: TrendingUp,
          title: "Intelligentes Energiemanagement",
          text: "Automatische Steuerung des Solarstroms für maximalen Eigenverbrauch, geringere Energiekosten und transparente Übersicht per App – ganzjährig optimiert.",
          delay: "delay-500",
        },
        {
          icon: Building,
          title: "Dachflächenpachtung",
          text: "Risikofreie Verpachtung von Dachflächen für Solaranlagen: attraktive Pachteinnahmen, keine Investitionskosten und optionale Dachsanierung durch den Investor.",
          delay: "delay-600",
        },
        {
          icon: Shield,
          title: "Für wen wir arbeiten",
          text: "Eigentümer von Mehrfamilienhäusern, Wohnungsunternehmen, Hausverwaltungen und Investoren. Keine Einfamilienhäuser, kein Direktverkauf, keine Eigeninstallation.",
          delay: "delay-700",
        },
        {
          icon: Layers,
          title: "So einfach funktioniert es",
          text: "Anfrage stellen → Projektprüfung → Planung mit passenden Fachbetrieben → Umsetzung direkt mit dem Installateur.",
          delay: "delay-800",
        },
      ].map((feature, index) => (
        <Card
          key={index}
          className={`group p-8 border-none bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
          hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500
          animate-in fade-in slide-in-from-bottom-8 fill-mode-both ${feature.delay}`}
        >
          <div className="p-3 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors inline-block mb-6">
            <feature.icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {feature.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {feature.text}
          </p>
        </Card>
      ))}
    </div>
  </div>
</section>


        {/* Products Section */}
        {/* <section className="py-24 bg-white border-y border-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
              <div className="animate-in fade-in slide-in-from-left-6 duration-700">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                  Unsere neuesten Produkte
                </h2>
                <p className="text-muted-foreground mt-2">
                  Entdecken Sie unsere hochwertigen Solar- und Speicherlösungen.
                </p>
              </div>
              <Button asChild variant="link" className="text-primary font-bold text-md p-0 group">
                <Link href="/products" className="flex items-center gap-1">
                  Alle Produkte anzeigen <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <ProductList />
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 md:py-20 text-center text-primary-foreground animate-in zoom-in-95 duration-700 fill-mode-both">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                  Bereit für Ihre grüne Energiezukunft?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
                  Schließen Sie sich hunderten zufriedenen Kunden an. Kontaktieren Sie uns noch heute für eine kostenlose und unverbindliche Fachberatung.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-10 py-7 text-lg font-semibold hover:scale-105 transition-transform shadow-xl"
                >
                  <Link href="/contact">Jetzt Beratung sichern</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}