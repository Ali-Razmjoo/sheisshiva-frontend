import { Card } from "@/components/ui/card"
import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your guide to personal transformation and growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/professional-woman-coach-portrait--warm-and-empowe.jpg"
                alt="Coach profile"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Why We Need a Coach</h3>
              <p className="text-muted-foreground leading-relaxed">
                A coach helps you unlock your potential and navigate life's challenges with clarity and confidence.
                Through personalized guidance and support, coaching empowers you to overcome obstacles, achieve your
                goals, and create lasting positive change in your life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Together, we'll explore your aspirations, identify barriers, and develop actionable strategies for your
                personal and professional growth. Your transformation is my mission.
              </p>
            </Card>

            <div className="flex gap-4 justify-center md:justify-start">
              <Button variant="outline" size="lg" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2" size={20} />
                  Instagram
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
