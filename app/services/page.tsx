import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Sun, Settings, Wrench, BarChart3, Home, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services - Wemasol",
  description:
    "Discover our comprehensive services: solar system installation, energy consulting, maintenance & service, planning and more.",
  keywords: [
    "solar installation",
    "photovoltaic planning",
    "energy consulting",
    "solar maintenance",
    "PV system service",
  ],
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="subtle-gradient-bg">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From initial consultation to long-term support – we accompany you on your journey to sustainable energy
                supply.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card
                className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-left-4 duration-700"
                style={{ animationDelay: "100ms" }}
              >
                <Sun className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Photovoltaic Systems</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Customized solar systems for your roof. We plan, install, and commission your PV system – for maximum
                  efficiency and output.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Individual planning and design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Professional installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Registration and commissioning</span>
                  </li>
                </ul>
              </Card>

              <Card
                className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-right-4 duration-700"
                style={{ animationDelay: "200ms" }}
              >
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Energy Consulting</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our experts analyze your energy needs and develop an optimal concept for your individual situation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Economic feasibility analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Funding consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Amortization calculation</span>
                  </li>
                </ul>
              </Card>

              <Card
                className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-left-4 duration-700"
                style={{ animationDelay: "300ms" }}
              >
                <Wrench className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Maintenance & Service</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Regular maintenance and fast service ensure long-term high yields and availability of your system.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Annual inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Fault diagnosis and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Performance optimization</span>
                  </li>
                </ul>
              </Card>

              <Card
                className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-right-4 duration-700"
                style={{ animationDelay: "400ms" }}
              >
                <Settings className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Planning & Project Management</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From roof analysis to approval – we take care of all technical and administrative steps.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Structural assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Grid connection coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Authority communication</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card
                className="p-8 bg-primary/5 border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95 duration-700"
                style={{ animationDelay: "500ms" }}
              >
                <Home className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Residential Customers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Solar systems for single-family homes, apartment buildings, and residential properties. Become
                  independent from rising electricity prices.
                </p>
              </Card>

              <Card
                className="p-8 bg-secondary/5 border-secondary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95 duration-700"
                style={{ animationDelay: "600ms" }}
              >
                <Building2 className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3">Commercial Customers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Commercial PV systems for businesses, industry, and public institutions. Sustainably reduce your
                  operating costs.
                </p>
              </Card>
            </div>

            <div
              className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 md:p-12 animate-in fade-in zoom-in-95 duration-700"
              style={{ animationDelay: "700ms" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in Our Services?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Contact us for a no-obligation consultation and learn how we can help you.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Get Consultation Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
