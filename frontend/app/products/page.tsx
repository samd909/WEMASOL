import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductsGrid } from "@/components/products-grid"

export const metadata: Metadata = {
  title: "Products - Wemasol",
  description: "Browse Wemasol's renewable energy products, including solar panels and solutions for your sustainable future.",
  keywords: ["Wemasol products", "solar panels", "renewable energy products", "photovoltaic solutions"],
}

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main className="subtle-gradient-bg">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-in fade-in slide-in-from-bottom-3 duration-700">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our latest solar solutions and energy products for a sustainable future.
              </p>
            </div>

            <ProductsGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
