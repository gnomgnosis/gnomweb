"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const benefits = [
  "Social Network 3.0 – Communicate, invest, and create projects in one ecosystem.",
  "AI as a Co-Creator – Neural networks transform raw ideas into finished products, from websites to marketing strategies.",
  "Accessible Monetization – Even small ideas can generate income through tokenization and auctions.",
  "Decentralized Governance – Users influence project development through DAO voting.",
  "Airdrops & Engagement Rewards – The more you participate in GNOM, the higher your chances of receiving tokens from promising startups.",
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 px-4 bg-gnom-green-900">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gnom-green-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        GNOM Benefits
      </motion.h2>
      <ul className="space-y-4 max-w-3xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CheckCircle className="text-gnom-green-400 mr-2 mt-1 flex-shrink-0" />
            <span className="text-gnom-light">{benefit}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

