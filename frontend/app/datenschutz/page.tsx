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
            <p>Stand: 2026</p>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">
                1. Information über die Erhebung personenbezogener Daten
              </h2>
              <p>
                Im Folgenden informieren wir über die Erhebung personenbezogener Daten bei Nutzung unserer Website <a href="https://www.wemasol.de">www.wemasol.de</a>. Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, z. B. Name, Adresse, E-Mail-Adresse, Telefonnummer oder Nutzerverhalten.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">
                2. Verantwortlicher
              </h2>
              <p>
                WEMASOL GmbH<br />
                Grunewaldstraße 9<br />
                40789 Monheim am Rhein<br />
                Deutschland<br />
                Rufnummer: 01522 4718246<br />
                E-Mail: info@wemasol.de
              </p>
              <p>Ein Datenschutzbeauftragter ist aktuell nicht bestellt, da hierfür keine gesetzliche Verpflichtung besteht.</p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">
                3. Erhebung personenbezogener Daten beim Besuch unserer Website
              </h2>
              <p>
                Bei der rein informatorischen Nutzung der Website – also wenn Sie uns keine Informationen übermitteln – erheben wir nur die personenbezogenen Daten, die Ihr Browser automatisch an unseren Server übermittelt. Diese Daten sind technisch erforderlich, um die Website anzuzeigen und deren Stabilität sowie Sicherheit zu gewährleisten. Erfasst werden insbesondere:
              </p>
              <ul className="list-disc list-inside">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Zeitzonendifferenz zur GMT</li>
                <li>Inhalt der Anforderung</li>
                <li>HTTP-Statuscode</li>
                <li>übertragene Datenmenge</li>
                <li>Referrer-URL</li>
                <li>Browsertyp und Browserversion</li>
                <li>Betriebssystem</li>
              </ul>
              <p className="mt-2">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und stabilen Betrieb der Website). Server-Logfiles werden nach Beendigung des Kommunikationsvorgangs gelöscht bzw. automatisch nach einer angemessenen Frist entfernt.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">4. Hosting</h2>
              <p>
                Die Website wird bei einem externen Hosting-Anbieter betrieben. Mit diesem Anbieter besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">5. Kontaktformular und E-Mail-Anfragen</h2>
              <p>
                Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir Ihre Daten zur Bearbeitung Ihrer Anfrage:
              </p>
              <ul className="list-disc list-inside">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Adresse</li>
                <li>Angaben zu Ihrem Projekt (z. B. PV/EMS/Speicher)</li>
              </ul>
              <p className="mt-2">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind oder gesetzliche Aufbewahrungspflichten entfallen.
              </p>
              <p className="mt-2 font-semibold">Einwilligungs-Checkbox für das Kontaktformular:</p>
              <pre className="bg-gray-100 p-4 rounded text-xs overflow-x-auto">
{`<label>
  <input type="checkbox" name="einwilligung_partner" required>
  Ich bin damit einverstanden, dass meine personenbezogenen Daten (Name, E-Mail, Telefonnummer, Adresse, Projektangaben) zur Bearbeitung meiner Anfrage sowie zur Vermittlung an geeignete Fach- und Installationsunternehmen weitergegeben werden. Ich kann diese Einwilligung jederzeit widerrufen.
</label>`}
              </pre>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">6. Weitergabe von Daten an Partnerunternehmen</h2>
              <p>
                Um Ihre Anfrage umzusetzen, werden die von Ihnen angegebenen Daten an ausgewählte Installations- und Fachunternehmen weitergegeben. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (notwendig für vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Widerruf ist jederzeit möglich.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">7. Terminvereinbarung / Beratung</h2>
              <p>
                Wenn Sie einen Beratungstermin über unsere Website anfragen, verarbeiten wir Ihre personenbezogenen Daten zur Terminorganisation. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">8. Cookies</h2>
              <p>
                Unsere Website verwendet technisch notwendige Cookies. Sie dienen ausschließlich dazu, die Funktionalität der Website sicherzustellen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p className="mt-2">
                Analyse- und Marketing-Cookies werden aktuell nicht verwendet. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben oder generell ausschließen. Beachten Sie, dass die Funktionalität der Website bei Deaktivierung eingeschränkt sein kann.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">9. Speicherdauer</h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen:
              </p>
              <ul className="list-disc list-inside">
                <li>Handelsrechtlich: 6 Jahre (HGB)</li>
                <li>Steuerrechtlich: 10 Jahre (AO)</li>
              </ul>
              <p className="mt-2">
                Nach Ablauf dieser Fristen werden die Daten gelöscht.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">10. Ihre Rechte</h2>
              <p>
                Sie haben folgende Rechte:
              </p>
              <ul className="list-disc list-inside">
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-2">
                Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">11. Widerruf von Einwilligungen</h2>
              <p>
                Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Eine formlose Mitteilung per E-Mail an info@wemasol.de genügt.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900 mb-2">12. SSL- bzw. TLS-Verschlüsselung</h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung an „https://“ in der Adresszeile Ihres Browsers.
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}