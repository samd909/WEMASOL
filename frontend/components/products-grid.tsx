"use client"
import { useEffect, useState, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export interface ProductImage {
  id: number
  image: string
}

export interface Product {
  id: number
  name: string
  description: string
  images: ProductImage[]
}

export function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [selectedProduct])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://api.wemasol.sdict.nl/api/products/')
        const data = await res.json()
        setProducts(data.reverse())
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const prevImage = useCallback(() => {
    if (!selectedProduct) return
    setActiveImageIndex((prev) => (prev === 0 ? selectedProduct.images.length - 1 : prev - 1))
  }, [selectedProduct])

  const nextImage = useCallback(() => {
    if (!selectedProduct) return
    setActiveImageIndex((prev) => (prev === selectedProduct.images.length - 1 ? 0 : prev + 1))
  }, [selectedProduct])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedProduct(null)
    }
  }

  if (loading) return <p className="text-center text-muted-foreground">Loading products...</p>
  if (!products.length) return <p className="text-center text-muted-foreground">No products found.</p>

  return (
    <>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => {
              setSelectedProduct(product)
              setActiveImageIndex(0)
            }}
          >
            {product.images.length > 0 && (
              <img
                src={
                  product.images[0].image.startsWith("http")
                    ? product.images[0].image
                    : `http://127.0.0.1:8000${product.images[0].image}`
                }
                alt={product.name}
                className="h-48 w-full object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
            <p className="text-muted-foreground text-sm line-clamp-3">{product.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedProduct(product)
                setActiveImageIndex(0)
              }}
            >
              View Product
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={handleOverlayClick}
        >
          <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-full flex flex-col md:flex-row overflow-hidden shadow-xl">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={24} />
            </button>

            {/* Images Carousel */}
            <div className="relative md:w-1/2 h-64 md:h-auto flex items-center justify-center bg-gray-100">
              {selectedProduct.images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white z-10"
                    onClick={prevImage}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white z-10"
                    onClick={nextImage}
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

                <img
                key={selectedProduct.images[activeImageIndex].id} // forces re-render per image
                src={
                    selectedProduct.images[activeImageIndex].image.startsWith("http")
                    ? selectedProduct.images[activeImageIndex].image
                    : `http://127.0.0.1:8000${selectedProduct.images[activeImageIndex].image}`
                }
                alt={selectedProduct.name}
                className="h-64 md:h-auto w-full object-contain transition-opacity duration-500 ease-in-out opacity-0 animate-fade-in"
                />

            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
              <p className="text-muted-foreground mb-4">{selectedProduct.description}</p>

              {/* Image Thumbnails for quick navigation */}
              {selectedProduct.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto mt-auto pb-2">
                  {selectedProduct.images.map((img, idx) => (
                    <button
                      key={img.id}
                      className={`w-3 h-3 rounded-full ${
                        idx === activeImageIndex ? "bg-primary" : "bg-gray-300"
                      }`}
                      onClick={() => setActiveImageIndex(idx)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
