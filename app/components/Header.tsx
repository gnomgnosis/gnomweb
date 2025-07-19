"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gnom-dark">
      <motion.div
        className="mb-6 w-32 md:w-48 lg:w-56"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/img/gnom500green.png"
          alt="GNOM Logo"
          width={500}
          height={500}
          className="w-full h-auto"
          priority
        />
      </motion.div>
      
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-gnom-green-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        GNOM
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-6 text-gnom-green-300"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Global Network Of Money
      </motion.h2>
      <motion.h3
        className="text-xl md:text-2xl mb-8 max-w-2xl text-gnom-light"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        A Decentralized Social Network for Idea Creation and Monetization
      </motion.h3>
      <motion.p
        className="text-lg mb-8 max-w-3xl text-gnom-light"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        GNOM is the world's first social network that combines blockchain, artificial intelligence, and a community of
        enthusiasts to transform any idea into a real project. The platform allows users to communicate, share content,
        find like-minded people, and launch decentralized startups powered by AI agents.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Button size="lg" className="bg-gnom-green-500 hover:bg-gnom-green-600 text-gnom-dark font-semibold">
          Join GNOM
        </Button>
      </motion.div>
    </section>
  )
}
