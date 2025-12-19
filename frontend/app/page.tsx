import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Sun, Leaf, Zap, Shield, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductList } from "@/components/product-list";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
        <Navigation />

      <main className="flex-grow">
        {/* Hero Section - Clean White Background */}
        <section className="relative overflow-hidden py-24 md:py-32 bg-white">
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-top-8 duration-1000">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full">
                Professional Solar Solutions
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
                Green Energy for a <br />
                <span className="text-primary">Sustainable Future</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Wemasol is your partner for renewable energy. We offer innovative solar solutions and professional consulting for a greener world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="rounded-full px-10 py-6 text-lg font-semibold hover:scale-105 transition-all shadow-md">
                  <Link href="/contact">Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="rounded-full px-10 py-6 text-lg font-semibold group hover:bg-slate-50">
                  <Link href="/services" className="flex items-center gap-2">
                    Our Services <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Pure White with subtle shadow cards */}
        <section className="py-24 border-t border-slate-50 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-in fade-in duration-700">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why Wemasol?</h2>
              <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Sun, title: "Solar Energy", text: "High-efficiency photovoltaic systems for maximum energy yield.", delay: "delay-100" },
                { icon: Leaf, title: "Sustainability", text: "100% renewable energy for an environmentally friendly future.", delay: "delay-200" },
                { icon: Zap, title: "Efficiency", text: "State-of-the-art technology for optimal performance and output.", delay: "delay-300" },
                { icon: Shield, title: "Quality", text: "Certified components with long-term warranty and support.", delay: "delay-400" },
                { icon: TrendingUp, title: "Cost-Effective", text: "Long-term cost savings through your own power generation.", delay: "delay-500" },
                { icon: Users, title: "Consulting", text: "Personal support from planning to final commissioning.", delay: "delay-700" },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className={`group p-8 border-none bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 fill-mode-both ${feature.delay}`}
                >
                  <div className="p-3 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors inline-block mb-6">
                    <feature.icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.text}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section - Clean Design */}
        <section className="py-24 bg-white border-y border-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
              <div className="animate-in fade-in slide-in-from-left-6 duration-700">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our latest products</h2>
                <p className="text-muted-foreground mt-2">Explore our premium solar and energy storage solutions.</p>
              </div>
              <Button asChild variant="link" className="text-primary font-bold text-md p-0 group">
                <Link href="/products" className="flex items-center gap-1">
                  View All Products <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
               <ProductList />
            </div>
          </div>
        </section>

        {/* CTA Section - Matches Services Page exactly */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 md:py-20 text-center text-primary-foreground animate-in zoom-in-95 duration-700 fill-mode-both">
              {/* Decorative Circle Background */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready for Your Green Energy Future?</h2>
                <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
                  Join hundreds of satisfied customers. Contact us today for a free, no-obligation expert consultation.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-10 py-7 text-lg font-semibold hover:scale-105 transition-transform shadow-xl"
                >
                  <Link href="/contact">Get Consultation Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}