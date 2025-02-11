"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Coins, Vote, Code } from "lucide-react"

const userTypes = [
  { title: "Content creators", description: "Looking to turn their posts into startups.", icon: Users },
  { title: "Crypto community", description: "Searching for new tokens and early-stage projects.", icon: Coins },
  {
    title: "Social media activists",
    description: "Who want to shape the platform's future through DAO governance.",
    icon: Vote,
  },
  {
    title: "Developers & designers",
    description: "Who want to collaborate with AI for accelerated workflow.",
    icon: Code,
  },
]

export default function WhoIsItFor() {
  return (
    <section id="who-is-it-for" className="py-16 px-4 bg-gnom-dark">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gnom-green-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Who is GNOM For?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {userTypes.map((type, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gnom-green-900 border-gnom-green-700 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gnom-green-300 flex items-center">
                  {<type.icon className="mr-2" />}
                  {type.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gnom-light">{type.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

