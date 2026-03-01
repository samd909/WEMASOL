import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Impressum – WEMASOL",
  description: "Rechtliche Angaben gemäß §5 TMG",
}

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="bg-transparent py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="p-8">
            <h1 className="text-3xl font-bold mb-6">Impressum</h1>

            <section className="space-y-6 text-sm text-muted-foreground">
              <div>
                <h2 className="font-semibold text-slate-900">Angaben gemäß § 5 TMG</h2>
                <p>
                  WEMASOL – Rafael Barrios<br />
                  Grunewaldstraße 9<br />
                  40789 Monheim am Rhein<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Kontakt</h2>
                <p>
                  Rufnummer: 01522 4718246<br />
                  E-Mail: info@wemasol.de
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                  DE369647022
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Verantwortlich für den Inhalt nach §55 Abs. 2 RStV</h2>
                <p>Rafael Barrios</p>
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Hinweis zur Datenverarbeitung und Weitergabe</h2>
                <p>
                  Die auf dieser Website eingegebenen Daten im Kontaktformular werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und können im weiteren Verlauf an geeignete Installations- oder Fachunternehmen weitergegeben werden, um die gewünschte Dienstleistung (z. B. Installation von Solaranlagen, Energiespeichern oder Ladepunkten) zu realisieren. Weitere Informationen zur Datenverarbeitung finden Sie in unserer <a href="/datenschutz" className="underline">Datenschutzerklärung</a>.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Verbraucherstreitbeilegung | Universalschlichtungsstelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Haftungsausschluss</h2>
                <p>
                  Die Inhalte unserer Webseiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Für den Inhalt verlinkter externer Webseiten sind ausschließlich deren Betreiber verantwortlich. Sofern auf der Website verwendete Bilder nicht von WEMASOL erstellt wurden, stammen diese von lizenzierten Quellen und die Urheberrechte werden beachtet.
                </p>
              </div>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}