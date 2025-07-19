"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const menuItems = [
  { name: "Home", href: "#" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Benefits", href: "#benefits" },
  { name: "Who Is It For", href: "#who-is-it-for" },
  { name: "Mission", href: "#mission" },
  { name: "Token", href: "#token" },
  { name: "Join", href: "#join" },
]

export default function TopMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }, [])

  return (
    <nav className="bg-gnom-dark-alt fixed w-full z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип и название GNOM */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* Логотип */}
              <Image
                src="/img/gnom500green.png"
                alt="GNOM Logo"
                width={30}
                height={30}
                className="w-8 h-8 object-contain"
                priority
              />
              <a
                href="#"
                onClick={(e) => handleClick(e, "#")}
                className="text-gnom-green-400 text-lg font-bold"
                title="Global Network Of Money"
              >
                GNOM
              </a>
            </div>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gnom-light hover:bg-gnom-green-700 hover:text-gnom-light px-3 py-2 rounded-md text-sm font-medium"
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Мобильное меню (кнопка бургер) */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gnom-light hover:bg-gnom-green-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Мобильное выпадающее меню */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gnom-dark-alt"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gnom-light hover:bg-gnom-green-700 hover:text-gnom-light block px-3 py-2 rounded-md text-base font-medium"
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
