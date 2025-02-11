"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function JoinGNOM() {
  return (
    <section id="join" className="py-16 px-4 text-center bg-gnom-dark">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-gnom-green-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join GNOM!
      </motion.h2>
      <motion.p
        className="text-lg mb-8 max-w-3xl mx-auto text-gnom-light"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Publish your thoughts, find partners, launch projects, and change the world alongside millions of users. Here,
        your words become code, likes turn into investments, and the community drives progress.
      </motion.p>
      <motion.form
        className="max-w-md mx-auto space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-gnom-green-900 border-gnom-green-700 text-gnom-light"
        />
        <Button type="submit" className="w-full bg-gnom-green-500 hover:bg-gnom-green-600 text-gnom-dark">
          Sign Up
        </Button>
      </motion.form>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button
          variant="outline"
          className="bg-transparent border-gnom-green-500 text-gnom-green-500 hover:bg-gnom-green-500 hover:text-gnom-dark"
        >
          Try Demo
        </Button>
      </motion.div>
    </section>
  )
}

