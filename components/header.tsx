"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            SheIsShiva
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection("articles")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Subjects & Articles
            </button>
            <button
              onClick={() => scrollToSection("programmes")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Programmes
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection("articles")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Subjects & Articles
            </button>
            <button
              onClick={() => scrollToSection("programmes")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Programmes
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="w-full">
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
