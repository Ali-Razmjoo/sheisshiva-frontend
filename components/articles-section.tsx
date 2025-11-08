import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Lightbulb, Target } from "lucide-react"

const articles = [
  {
    title: "Finding Your Inner Strength",
    description: "Discover the power within you to overcome any challenge and embrace your authentic self.",
    icon: Heart,
  },
  {
    title: "Setting Meaningful Goals",
    description: "Learn how to create goals that align with your values and drive lasting transformation.",
    icon: Target,
  },
  {
    title: "Mindfulness in Daily Life",
    description: "Practical techniques to bring awareness and intention to every moment of your journey.",
    icon: Lightbulb,
  },
  {
    title: "The Art of Self-Compassion",
    description: "Why being kind to yourself is the foundation of personal growth and resilience.",
    icon: BookOpen,
  },
]

export function ArticlesSection() {
  return (
    <section id="articles" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Subjects & Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and inspiration for your personal development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => {
            const Icon = article.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0">
                    Read more →
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
