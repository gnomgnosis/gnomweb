"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdditionalInfo() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Copy error:", err)
    })
  }

  return (
    <section className="py-16 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tokenomics
      </motion.h2>
      <motion.div
        className="max-w-2xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold text-green-500">Contract Address</h3>
        <div className="relative">
          <Input
            type="text"
            value="0x2F4Eb11627bd3726003eB7040517Dd6A9Fd05187"
            readOnly
            className="cursor-pointer bg-gray-800 border-gray-700 text-white font-mono text-center"
            onClick={() => copyToClipboard("0x2F4Eb11627bd3726003eB7040517Dd6A9Fd05187")}
          />
        </div>
        <p>
          Check out our contract on{" "}
          <a
            href="https://gnosisscan.io/token/0x2f4eb11627bd3726003eb7040517dd6a9fd05187"
            className="text-green-500 underline hover:text-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            GnosisScan
          </a>{" "}
          or{" "}
          <a
            href="https://gnosis.blockscout.com/token/0x2F4Eb11627bd3726003eB7040517Dd6A9Fd05187"
            className="text-green-500 underline hover:text-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gnosis Blockscout
          </a>
        </p>
        <div className="space-y-2">
          <p>
            Total Supply: <span className="font-semibold">1,000,000,000 GNOM</span>
          </p>
          <p>
            Community Allocation: <span className="font-semibold">50%</span>
          </p>
          <p>
            Development Fund: <span className="font-semibold">25%</span>
          </p>
          <p>
            Marketing: <span className="font-semibold">15%</span>
          </p>
          <p>
            Liquidity Pool: <span className="font-semibold">10%</span>
          </p>
        </div>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold my-8 text-center text-green-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        How to Buy GNOM
      </motion.h2>
      <motion.div
        className="max-w-2xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p>Follow these simple steps to become part of the GNOM community:</p>
        <ol className="list-decimal list-inside">
          <li>Connect your wallet to Sushi.</li>
          <li>Search for GNOM Token and swap!</li>
        </ol>
        <div className="text-center">
          <Button asChild className="mt-4 bg-green-500 hover:bg-green-600">
            <a href="https://www.sushi.com/gnosis/swap" target="_blank" rel="noopener noreferrer">
              Buy GNOM Now on SushiSwap
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold my-8 text-center text-green-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Add Liquidity
      </motion.h2>
      <motion.div
        className="max-w-2xl mx-auto space-y-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <p>Support the GNOM ecosystem by adding liquidity to our pool:</p>
        <Button asChild className="mt-4 bg-green-500 hover:bg-green-600">
          <a href="https://www.sushi.com/gnosis/pool" target="_blank" rel="noopener noreferrer">
            Add Liquidity on SushiSwap
          </a>
        </Button>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold my-8 text-center text-green-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Join the Community
      </motion.h2>
      <motion.div
        className="max-w-2xl mx-auto space-y-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <p>Stay connected with GNOM on our social platforms:</p>
        <div className="flex justify-center space-x-4 mt-6">
          <Button asChild className="bg-green-500 hover:bg-green-600">
            <a href="https://t.me/gnomgnosis" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </Button>
          <Button asChild className="bg-green-500 hover:bg-green-600">
            <a href="https://x.com/gnomgnosis" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </Button>
          <Button asChild className="bg-green-500 hover:bg-green-600">
            <a href="https://discord.gg/wrJPeeqG" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

