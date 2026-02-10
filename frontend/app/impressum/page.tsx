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
      <main className="bg-transparent  py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="p-8">
            <h1 className="text-3xl font-bold mb-6">Impressum</h1>

            <section className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h2 className="font-semibold text-slate-900">Angaben gemäß § 5 TMG</h2>
                <p>
                  WEMASOL<br />
                  Test Test<br />
                  Test 1<br />
                  12345 Test<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Kontakt</h2>
                <p>
                  Telefon: +49 (0) 123 456789<br />
                  E-Mail: info@wemasol.de
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                  DE123456789
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß §7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
                  den allgemeinen Gesetzen verantwortlich. Nach §§8 bis 10 TMG sind wir jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Haftung für Links</h2>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht.
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
