import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wemasol - Green Energy for a Sustainable Future",
  description:
    "Wemasol provides innovative solutions for renewable energy, solar technology, and sustainable power supply. Contact us for your green energy solution.",
  keywords: [
    "solar energy",
    "renewable energy",
    "photovoltaic",
    "sustainable energy",
    "green energy",
    "solar technology",
    "EV charging",
  ],
  authors: [{ name: "Wemasol" }],
  openGraph: {
    title: "Wemasol - Green Energy for a Sustainable Future",
    description: "Innovative solutions for renewable energy and solar technology",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraphlogo.png",   // <-- your OG logo file in /public
        width: 512,           // recommended OG width
        height: 512,           // recommended OG height
        alt: "Wemasol Logo",   // accessibility
      },
    ],
  },
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",   // your main favicon
    apple: "/apple-touch-icon.png", // for iOS devices
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
