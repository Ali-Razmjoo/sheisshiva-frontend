import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Geist_Mono, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const inter = V0_Font_Inter({
  subsets: ['latin'],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: '--font-inter'
})
const geistMono = V0_Font_Geist_Mono({
  subsets: ['latin'],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: '--font-geist-mono'
})
const sourceSerif4 = V0_Font_Source_Serif_4({
  subsets: ['latin'],
  weight: ["200","300","400","500","600","700","800","900"],
  variable: '--font-source-serif-4'
})

export const metadata: Metadata = {
  title: "SheIsShiva Coaching | Personal Transformation & Growth",
  description:
    "Empowering personal coaching for women seeking transformation and growth. Discover your inner strength and create the life you deserve.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} ${sourceSerif4.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
