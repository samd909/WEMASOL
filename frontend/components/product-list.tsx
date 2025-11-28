"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProductImage {
  id: number
  image: string
}

interface Product {
  id: number
  name: string
  description: string
  price: string
  images: ProductImage[]
}

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://api.wemasol.sdict.nl/api/products/')
        if (!res.ok) throw new Error("Failed to fetch products")
        const data = await res.json()
        setProducts(data.reverse().slice(0, 2)) // take 2 most recent
      } catch (error) {
        toast({
          title: "Error fetching products",
          description: `${error}`,
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [toast])

  if (loading) return <p className="text-center mt-10">Loading products...</p>
  if (!products.length) return <p className="text-center mt-10">No products found.</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className="flex flex-col overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          {product.images.length > 0 && (
            <img
              src={
                product.images[0].image.startsWith("http")
                  ? product.images[0].image
                  : `http://127.0.0.1:8000${product.images[0].image}`
              }
              alt={product.name}
              className="w-full h-64 object-cover"
            />
          )}

          <div className="p-6 flex flex-col flex-1 bg-white">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-muted-foreground mb-4 flex-1">{product.description}</p>

            <Button
              asChild
              variant="outline"
              className="mt-auto flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300"
            >
              <Link href="/products">
                View Products <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
