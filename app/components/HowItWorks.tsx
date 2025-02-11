"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    title: "Social Network + Ideas",
    description:
      "Users publish ideas, discuss them in communities, form teams, or suggest improvements. To activate an idea as a project, the author pays for its launch in GNOM tokens.",
  },
  {
    title: "Project Tokenization",
    description:
      "The system automatically issues unique tokens for each project. The author receives 1% of the tokens, and the idea becomes part of the GNOM catalog.",
  },
  {
    title: "Auction & AI Curator",
    description:
      "The next 1% of tokens are sold at an auction. An AI agent becomes the project's 'digital mentor'—developing the idea, generating code, creating content, and crafting marketing strategies.",
  },
  {
    title: "Community & Airdrops",
    description:
      "AI interacts with GNOM users—collecting feedback, organizing voting, and planning airdrops for active participants. Tokens are distributed among the community, author, and investors.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-gnom-dark">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gnom-green-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How It Works
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gnom-green-900 border-gnom-green-700 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gnom-green-300">
                  {index + 1}. {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gnom-light">{step.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

