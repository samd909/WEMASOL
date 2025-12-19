import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle2, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact - Wemasol",
  description: "Get in touch with Wemasol for a free solar energy consultation.",
  keywords: ["Wemasol contact", "solar consulting", "PV inquiry", "energy consultation"],
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email Us",
      value: "info@wemasol.de",
      href: "mailto:info@wemasol.de",
      delay: "delay-100",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+49 (0) XXX XXXXXXX",
      href: "tel:+49",
      delay: "delay-200",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Germany HQ",
      href: "#",
      delay: "delay-300",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Simple Header */}
        <section className="pt-20 pb-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                Let&apos;s talk <span className="text-primary">Solar.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our systems or need a customized quote? 
                Our team is ready to help you power your future.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container bg-transparent mx-auto px-4">
            {/* Contact Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method, i) => (
                <a
                  key={i}
                  href={method.href}
                  className={`group p-8 rounded-3xl shadow-sm border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 fill-mode-both ${method.delay}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-primary/5 group-hover:bg-primary text-primary group-hover:text-white transition-all duration-500">
                      <method.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary uppercase tracking-wider">
                        {method.label}
                      </p>
                      <p className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Form */}
              <div className="lg:col-span-7 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both delay-300">
                <div className="bg-white rounded-3xl p-1 shadow-sm border border-slate-100">
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-8">
                      <MessageSquare className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold">Send us a Message</h2>
                    </div>
                    <ContactForm />
                  </div>
                </div>
              </div>

              {/* Right Column: Info & FAQ */}
              <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both delay-400">
                {/* Business Hours */}
                <div className="p-8 rounded-3xl bg-white shadow-md border-gray-100 text-black ">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Business Hours</h3>
                  </div>
                  <div className="space-y-4 opacity-90">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-slate-400">Monday - Friday</span>
                      <span className="font-mono">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-slate-400">Saturday</span>
                      <span className="font-mono">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between text-primary font-bold">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 shadow-md border-gray-100">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    Next Steps
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Free initial consultation",
                      "Personal energy analysis",
                      "Response within 24 hours",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mini FAQ */}
                <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-md">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <HelpCircle className="h-6 w-6 text-primary" />
                    Quick FAQ
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-bold text-slate-900 text-sm mb-1">How fast can you start?</p>
                      <p className="text-sm text-muted-foreground">Usually within 2-4 weeks of approval.</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Do you assist with funding?</p>
                      <p className="text-sm text-muted-foreground">Yes, we guide you through all local subsidies.</p>
                    </div>
                  </div>
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