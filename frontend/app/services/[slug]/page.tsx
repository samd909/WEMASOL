"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Info } from "lucide-react"
import Link from "next/link"

interface Service {
  id: number
  name: string
  slug: string
  short_description: string
  description: string
  image?: string
}

export default function ServicePage() {
  const pathname = usePathname()
  const slug = pathname?.split("/")[2]

  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    const fetchService = async () => {
      //const res = await fetch(`http://127.0.0.1:8000/api/services/${slug}/`)
      const res = await fetch(`https://api.wemasol.de/api/services/${slug}/`)

      if (res.ok) {
        const data = await res.json()
        setService(data)
      }
      setLoading(false)
    }
    fetchService()
  }, [slug])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-pulse text-primary font-bold text-xl">Wird geladen...</div>
    </div>
  )

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center text-red-500 bg-slate-50">
      Dienstleistung nicht gefunden
    </div>
  )

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Header Section - Matches Contact Page Style */}
        <section className="pt-20 pb-12 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side: Text Content */}
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                  <CheckCircle2 className="h-4 w-4" />
                  Wemasol Service
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                  {service.name} <span className="text-primary">Lösungen.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {service.short_description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/20">
                    <Link href="/contact" className="flex items-center gap-2">
                      Jetzt anfragen <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Side: Image Card */}
              {service.image && (
                <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both delay-300">
                  <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -rotate-2"></div>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="relative rounded-3xl shadow-2xl object-cover w-full h-[350px] md:h-[450px] border-4 border-white"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Detailed Description Box */}
              <div className="lg:col-span-8 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both delay-500">
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Info className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-slate-900">Details & Vorteile</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Quick Info Sidebar */}
              <div className="lg:col-span-4 animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both delay-700">
                <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-6">Warum Wemasol?</h3>
                  <ul className="space-y-5">
                    {[
                      "Fachmännische Installation",
                      "Individuelle Planung",
                      "Zukunftssichere Technik",
                      "Rund-um-Service"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="font-medium opacity-90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-sm text-slate-400 mb-2 font-medium uppercase tracking-widest">Beratung gewünscht?</p>
                    <p className="text-lg font-bold text-primary">09:00 – 18:00 Uhr</p>
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