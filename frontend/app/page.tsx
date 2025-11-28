import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Sun, Leaf, Zap, Shield, TrendingUp, Users } from "lucide-react";
import { ProductList } from "@/components/product-list"; // Import your product list component

export default function HomePage() {
  return (
    <div className="overflow-x-hidden w-screen">
      <Navigation />
      <main className="subtle-gradient-bg">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container relative mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Green Energy for a <span className="gradient-text">Sustainable Future</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                Wemasol is your partner for renewable energy. We offer innovative solar solutions, professional
                consulting, and reliable service for a greener world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-animation text-white hover:scale-105 transition-all duration-300 shadow-lg">
                  <Link href="/contact">Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gradient-border hover:scale-105 transition-all duration-300 bg-transparent">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute top-1/2 left-1/2 w-full max-w-screen h-full max-h-screen -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
            <div className="w-full h-full gradient-glow"></div>
          </div>
          <div className="container relative mx-auto px-4">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-3 duration-500">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Wemasol?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We combine technical excellence with ecological responsibility
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "100ms" }}>
                <Sun className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">Solar Energy</h3>
                <p className="text-muted-foreground leading-relaxed">High-efficiency photovoltaic systems for maximum energy yield</p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "200ms" }}>
                <Leaf className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">100% renewable energy for an environmentally friendly future</p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "300ms" }}>
                <Zap className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
                <p className="text-muted-foreground leading-relaxed">State-of-the-art technology for optimal performance and output</p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "400ms" }}>
                <Shield className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-muted-foreground leading-relaxed">Certified components with long-term warranty</p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "500ms" }}>
                <TrendingUp className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
                <p className="text-muted-foreground leading-relaxed">Long-term cost savings through your own power generation</p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "600ms" }}>
                <Users className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">Consulting</h3>
                <p className="text-muted-foreground leading-relaxed">Personal support from planning to commissioning</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our latest products</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore our latest solar solutions and energy products.
              </p>
            </div>
            {/* Render the ProductList component */}
            <ProductList />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-in fade-in zoom-in-95 duration-700">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready for Your Green Energy Future?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Contact us today for a free consultation and discover how you can save costs with solar energy while
                protecting the environment.
              </p>
              <Button asChild size="lg" className="gradient-animation text-white hover:scale-105 transition-all duration-300 shadow-lg">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
