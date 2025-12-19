import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Sun, Settings, Wrench, BarChart3, Home, Building2, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services - Wemasol",
  description: "Discover our comprehensive solar services from installation to maintenance.",
  keywords: ["solar installation", "photovoltaic planning", "energy consulting", "solar maintenance"],
}

const services = [
  {
    icon: Sun,
    title: "Photovoltaic Systems",
    description: "Customized solar systems for your roof. We plan, install, and commission your PV system for maximum efficiency.",
    features: ["Individual planning and design", "Professional installation", "Registration and commissioning"],
    delay: "delay-100",
  },
  {
    icon: BarChart3,
    title: "Energy Consulting",
    description: "Our experts analyze your energy needs and develop an optimal concept for your individual situation.",
    features: ["Economic feasibility analysis", "Funding consultation", "Amortization calculation"],
    delay: "delay-200",
  },
  {
    icon: Wrench,
    title: "Maintenance & Service",
    description: "Regular maintenance and fast service ensure long-term high yields and availability of your system.",
    features: ["Annual inspection", "Fault diagnosis and repair", "Performance optimization"],
    delay: "delay-300",
  },
  {
    icon: Settings,
    title: "Planning & Management",
    description: "From roof analysis to approval – we take care of all technical and administrative steps.",
    features: ["Structural assessment", "Grid connection coordination", "Authority communication"],
    delay: "delay-400",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50/50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-top-8 duration-1000">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full">
                Professional Expertise
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From initial consultation to long-term support – we accompany you on your journey to sustainable energy.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4">
            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`group relative p-8 border-none bg-white shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 animate-in fade-in slide-in-from-bottom-12 fill-mode-both ${service.delay}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <service.icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed min-h-[60px]">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-primary/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Target Audience Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="flex flex-col p-10 rounded-3xl bg-slate-900 text-white animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both delay-500">
                <Home className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Residential Customers</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Solar systems for single-family homes and apartment buildings. Become independent from rising electricity prices with a custom home solution.
                </p>
                <div className="mt-auto">
                  <div className="h-1 w-12 bg-primary rounded-full" />
                </div>
              </div>

              <div className="flex flex-col p-10 rounded-3xl bg-white border border-slate-200 animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both delay-500">
                <Building2 className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Commercial Customers</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Commercial PV systems for businesses and industry. Significantly reduce your long-term operating costs and carbon footprint.
                </p>
                <div className="mt-auto">
                  <div className="h-1 w-12 bg-primary rounded-full" />
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 md:py-20 text-center text-primary-foreground animate-in zoom-in-95 duration-700 fill-mode-both delay-700">
              {/* Decorative Circle Background */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to switch to solar energy?</h2>
                <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
                  Join hundreds of satisfied customers. Contact us today for a free, no-obligation expert consultation.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-10 py-6 text-lg font-semibold hover:scale-105 transition-transform"
                >
                  <Link href="/contact">Get Consultation Now</Link>
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