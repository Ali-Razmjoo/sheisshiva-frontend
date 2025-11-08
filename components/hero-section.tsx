"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

const quotes = [
  "Embrace your power, transform your life.",
  "Every journey begins with a single step forward.",
  "You are capable of more than you imagine.",
  "Growth happens outside your comfort zone.",
  "Your transformation starts with self-belief.",
  "Create the life you deserve, one day at a time.",
  "Strength comes from within, awaken yours.",
]

export function HeroSection() {
  const [quote, setQuote] = useState(quotes[0])

  useEffect(() => {
    // Get a quote based on the day of the year
    const now = new Date()
    const start = new Date(now.getFullYear(), 0, 0)
    const diff = now.getTime() - start.getTime()
    const oneDay = 1000 * 60 * 60 * 24
    const dayOfYear = Math.floor(diff / oneDay)
    const quoteIndex = dayOfYear % quotes.length
    setQuote(quotes[quoteIndex])
  }, [])

  const scrollToWhy = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Welcome to Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              Transformation Journey
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">{quote}</p>
        </div>

        <div className="pt-8">
          <button
            onClick={scrollToWhy}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Scroll to learn more"
          >
            <span className="text-sm">Why Coaching?</span>
            <ChevronDown className="animate-bounce" size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
