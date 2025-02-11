"use client"

import { motion } from "framer-motion"

export default function MissionVision() {
  return (
    <section id="mission" className="py-16 px-4 bg-gnom-green-900 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-gnom-green-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        GNOM's Mission
      </motion.h2>
      <motion.p
        className="text-xl mb-8 max-w-3xl mx-auto text-gnom-light"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        To become a global hub where social interactions, technology, and finance merge into a unified ecosystem. We
        erase the boundaries between dreams and reality: if the community supports your idea, AI and blockchain will
        handle the rest.
      </motion.p>
      <motion.blockquote
        className="text-2xl italic text-gnom-green-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        "Here, your words become code, likes turn into investments, and the community drives progress."
      </motion.blockquote>
    </section>
  )
}

