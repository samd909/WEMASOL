import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Target, Heart, Award, Users, ShieldCheck, Zap, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Wemasol",
  description: "Learn about Wemasol's mission to drive the renewable energy transition.",
  keywords: ["Wemasol team", "solar company", "photovoltaic experts", "sustainable energy"],
}

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "Advancing the energy transition by providing customized, sustainable energy solutions for every roof.",
    delay: "delay-100",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Sustainability, quality, and transparency. We treat every project as if it were for our own home.",
    delay: "delay-200",
  },
  {
    icon: Award,
    title: "Our Expertise",
    desc: "Certified professionals with decades of combined experience in high-efficiency PV systems.",
    delay: "delay-300",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="relative py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
                Pioneering the <span className="text-primary">Solar Revolution</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Wemasol is more than just a solar company. We are a dedicated team of energy experts 
                shaping the future of sustainable living through technical excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Story & Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Zap className="h-4 w-4" /> Our Journey
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Making Clean Energy Accessible</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Wemasol was founded with a clear vision: to break down the barriers of renewable energy. 
                    What started as a small local initiative has evolved into a leading partner for 
                    sustainable energy solutions.
                  </p>
                  <p>
                    Today, we empower homeowners and businesses to take control of their energy production, 
                    reducing costs and CO2 emissions simultaneously.
                  </p>
                  <p>
                    Our success is built on long-term trust, precision engineering, and a commitment to 
                    never settling for "good enough."
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
                        <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {[
                { label: "Systems Installed", value: "500+", icon: ShieldCheck },
                { label: "Happy Customers", value: "98%", icon: Heart },
                { label: "Years of Experience", value: "10+", icon: Award },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="relative p-10 text-center rounded-3xl border border-slate-100 bg-white hover:border-primary/20 transition-colors animate-in zoom-in-95 duration-700 fill-mode-both"
                  style={{ animationDelay: `${(i + 1) * 150}ms` }}
                >
                  <div className="text-5xl font-black text-slate-900 mb-3">{stat.value}</div>
                  <p className="text-sm uppercase tracking-widest font-bold text-primary">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 p-12 text-center animate-in fade-in duration-1000 fill-mode-both delay-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-50" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <Users className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to start your green energy chapter?
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Our team is ready to provide the expertise you need to make your transition seamless.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary hover:bg-primary/90 px-8 py-6 group"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Get in Touch <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}