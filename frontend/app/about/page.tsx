import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Target, Heart, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Wemasol",
  description:
    "Learn more about Wemasol, our mission for renewable energy, and our dedicated team for sustainable energy solutions.",
  keywords: ["Wemasol team", "solar company", "renewable energy company", "photovoltaic experts"],
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="subtle-gradient-bg">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Wemasol</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a dedicated team of energy experts with a clear mission: Actively shape the energy transition and
                create sustainable solutions for a greener future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Wemasol was founded with the vision of making renewable energy accessible to everyone. What started
                    as a small initiative has evolved into a reliable partner for sustainable energy solutions.
                  </p>
                  <p>
                    Today, we support private households and businesses in generating their own clean electricity and
                    actively contributing to climate protection.
                  </p>
                  <p>
                    Our success is based on technical excellence, personal consulting, and the trust of our customers,
                    whom we support long-term.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card
                  className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-right-4 duration-700"
                  style={{ animationDelay: "100ms" }}
                >
                  <Target className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advancing the energy transition and providing each customer with a customized, sustainable energy
                    solution.
                  </p>
                </Card>

                <Card
                  className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-right-4 duration-700"
                  style={{ animationDelay: "200ms" }}
                >
                  <Heart className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold mb-2">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sustainability, quality, transparency, and personal service are at the core of our actions.
                  </p>
                </Card>

                <Card
                  className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-right-4 duration-700"
                  style={{ animationDelay: "300ms" }}
                >
                  <Award className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold mb-2">Our Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Certified professionals with years of experience in planning, installation, and maintenance of
                    photovoltaic systems.
                  </p>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center animate-in fade-in duration-700">
                Why Customers Trust Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card
                  className="p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95 duration-700"
                  style={{ animationDelay: "100ms" }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Installed Systems</p>
                </Card>
                <Card
                  className="p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95 duration-700"
                  style={{ animationDelay: "200ms" }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-muted-foreground">Customer Satisfaction</p>
                </Card>
                <Card
                  className="p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95 duration-700"
                  style={{ animationDelay: "300ms" }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </Card>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 md:p-12 animate-in fade-in zoom-in-95 duration-700"
              style={{ animationDelay: "400ms" }}
            >
              <div className="max-w-3xl mx-auto text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Become Part of the Green Energy Future</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Let's work together on a sustainable future. Contact us and learn how we can support you.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact">Contact Us Now</Link>
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
