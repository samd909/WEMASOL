import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact - Wemasol",
  description: "Contact Wemasol for a free consultation on solar energy and renewable energy. We are here for you!",
  keywords: ["Wemasol contact", "solar consulting", "photovoltaic inquiry", "energy consulting contact"],
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="subtle-gradient-bg overflow-hidden">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-in fade-in slide-in-from-bottom-3 duration-700">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about solar energy or would you like a no-obligation quote? We look forward to hearing
                from you!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card
                className="p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95 duration-700"
                style={{ animationDelay: "100ms" }}
              >
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:info@wemasol.de" className="text-muted-foreground hover:text-primary transition-colors">
                  info@wemasol.de
                </a>
              </Card>

              <Card
                className="p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95 duration-700"
                style={{ animationDelay: "200ms" }}
              >
                <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+49" className="text-muted-foreground hover:text-primary transition-colors">
                  +49 (0) XXX XXXXXXX
                </a>
              </Card>

              <Card
                className="p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95 duration-700"
                style={{ animationDelay: "300ms" }}
              >
                <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Germany</p>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>

              <div className="space-y-6">
                <Card
                  className="p-6 hover:shadow-lg transition-shadow duration-300 animate-in fade-in slide-in-from-right-4 duration-700"
                  style={{ animationDelay: "400ms" }}
                >
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </Card>

                <Card
                  className="p-6 bg-primary/5 border-primary/20 hover:shadow-lg transition-shadow duration-300 animate-in fade-in slide-in-from-right-4 duration-700"
                  style={{ animationDelay: "500ms" }}
                >
                  <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-muted-foreground">Free and no-obligation initial consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-muted-foreground">Individual analysis of your energy needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-muted-foreground">
                        Transparent economic feasibility calculation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-muted-foreground">Response within 24 hours</span>
                    </li>
                  </ul>
                </Card>

                <Card
                  className="p-6 hover:shadow-lg transition-shadow duration-300 animate-in fade-in slide-in-from-right-4 duration-700"
                  style={{ animationDelay: "600ms" }}
                >
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-1">Is the consultation really free?</p>
                      <p className="text-sm text-muted-foreground">
                        Yes, the initial consultation is completely free and non-binding for you.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">How long does an installation take?</p>
                      <p className="text-sm text-muted-foreground">
                        Depending on system size, between 1-3 days for a single-family home.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Do you also offer maintenance?</p>
                      <p className="text-sm text-muted-foreground">
                        Yes, we offer comprehensive maintenance and service packages.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
