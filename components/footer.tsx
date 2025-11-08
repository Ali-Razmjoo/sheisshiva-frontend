"use client"

import { useEffect, useState } from "react"

const footerQuotes = [
  "Simple, beautiful, and minimal — bringing you positive energy every day 😊",
  "Your journey to transformation begins with a single step.",
  "Empowering women to embrace their true power.",
]

export function Footer() {
  const [quote, setQuote] = useState(footerQuotes[0])

  useEffect(() => {
    const now = new Date()
    const dayIndex = now.getDate() % footerQuotes.length
    setQuote(footerQuotes[dayIndex])
  }, [])

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center space-y-6">
        <p className="text-muted-foreground italic text-balance">{quote}</p>

        <div className="pt-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SheIsShiva Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
