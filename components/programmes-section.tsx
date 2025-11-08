import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const programmes = [
  {
    title: "Discovery Session",
    description: "A single introductory session to explore your goals and see if coaching is right for you.",
    features: ["90-minute personalized session", "Goal clarity assessment", "Customized action plan"],
  },
  {
    title: "Transformation Journey",
    description: "A comprehensive 12-week program designed to create lasting change in your life.",
    features: [
      "12 weekly coaching sessions",
      "Email and messaging support",
      "Personalized resources and tools",
      "Progress tracking and accountability",
    ],
    featured: true,
  },
  {
    title: "Executive Coaching",
    description: "For professionals seeking to elevate their leadership and career trajectory.",
    features: [
      "Bi-weekly sessions for 6 months",
      "Leadership development focus",
      "Career strategy planning",
      "Unlimited email support",
    ],
  },
]

export function ProgrammesSection() {
  return (
    <section id="programmes" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Programmes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the coaching journey that's right for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programmes.map((programme, index) => (
            <Card
              key={index}
              className={`flex flex-col ${programme.featured ? "border-primary shadow-lg scale-105" : ""}`}
            >
              <CardHeader>
                {programme.featured && <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>}
                <CardTitle className="text-2xl">{programme.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{programme.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {programme.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="text-primary shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={programme.featured ? "default" : "outline"}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
