"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted")
    if (!accepted) setVisible(true)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-slate-900 text-white px-4 py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 justify-between">
        <p className="text-sm text-slate-200">
          Diese Website verwendet ausschließlich technisch notwendige Cookies.
          Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>.
        </p>
        <Button
          onClick={() => {
            localStorage.setItem("cookiesAccepted", "true")
            setVisible(false)
          }}
          className="bg-white text-slate-900 hover:bg-slate-200"
        >
          Verstanden
        </Button>
      </div>
    </div>
  )
}
