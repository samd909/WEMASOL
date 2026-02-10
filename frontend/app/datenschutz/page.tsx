import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Datenschutzerklärung – WEMASOL",
  description: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO",
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main className="bg-transparent py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="p-8 space-y-6 text-sm text-muted-foreground">
            <h1 className="text-3xl font-bold text-slate-900">
              Datenschutzerklärung
            </h1>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">
                1. Allgemeine Hinweise
              </h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten
                personenbezogene Daten ausschließlich im Rahmen der gesetzlichen
                Vorschriften der Datenschutz-Grundverordnung (DSGVO).
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">
                2. Verantwortlicher
              </h2>
              <p>
                WEMASOL<br />
                Test Test<br />
                Test 1<br />
                12345 Test<br />
                E-Mail: info@wemasol.de
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">
                3. Server-Log-Dateien
              </h2>
              <p>
                Beim Aufruf dieser Website erhebt und speichert der Hostinganbieter
                automatisch Informationen in sogenannten Server-Log-Dateien.
                Diese Daten umfassen z. B. Browsertyp, Betriebssystem, IP-Adresse
                und Zeitpunkt des Zugriffs.
              </p>
              <p className="mt-2">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website).
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">
                4. Kontaktformular
              </h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
                Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten gespeichert,
                um Ihre Anfrage zu bearbeiten und zu beantworten.
              </p>
              <p className="mt-2">
                Diese Daten verwenden wir ausschließlich zur Kontaktaufnahme und geben sie
                nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-2">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">
                5. Cookies
              </h2>
              <p>
                Diese Website verwendet ausschließlich technisch notwendige Cookies.
                Es findet kein Tracking und keine Analyse des Nutzerverhaltens statt.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">
                6. Ihre Rechte
              </h2>
              <p>
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung sowie auf Widerspruch gegen die Verarbeitung
                Ihrer personenbezogenen Daten.
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
