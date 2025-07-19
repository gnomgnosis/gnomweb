"use client"

import Image from "next/image"
import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube, FaTelegram, FaDiscord } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-gnom-dark-alt text-gnom-light py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <Image src="/img/gnom500green.png" alt="GNOM Logo" width={40} height={40} className="mb-4" />
            <p className="text-sm text-muted-foreground">
              Transforming ideas into decentralized projects with blockchain & AI.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gnom-green-400 hover:text-gnom-green-500 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gnom-green-400 hover:text-gnom-green-500 transition">
                <FaInstagram size={20} />
              </a>
              <a href="https://x.com/gnomgnosis" className="text-gnom-green-400 hover:text-gnom-green-500 transition">
                <FaXTwitter size={20} />
              </a>
              <a href="https://github.com/gnomgnosis" className="text-gnom-green-400 hover:text-gnom-green-500 transition">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gnom-green-400 hover:text-gnom-green-500 transition">
                <FaYoutube size={20} />
              </a>
              <a href="https://t.me/gnomgnosis" className="text-gnom-green-400 hover:text-gnom-green-500 transition">
                <FaTelegram size={20} />
              </a>
              <a href="https://discord.gg/wrJPeeqG" className="text-gnom-green-400 hover:text-gnom-green-500 transition">
                <FaDiscord size={20} />
              </a>
            </div>
          </div>


          <div>
            <h4 className="font-semibold text-gnom-green-400">Solutions</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-gnom-green-500 transition">Marketing</a></li>
              <li><a href="#" className="hover:text-gnom-green-500 transition">Analytics</a></li>
              <li><a href="#" className="hover:text-gnom-green-500 transition">Automation</a></li>
              <li><a href="#" className="hover:text-gnom-green-500 transition">Commerce</a></li>
              <li><a href="#" className="hover:text-gnom-green-500 transition">Insights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gnom-green-400">Support</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-gnom-green-500 transition">Submit Ticket</a></li>
              <li><a href="#" className="hover:text-gnom-green-500 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-gnom-green-500 transition">Guides</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gnom-green-400">Company</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-gnom-green-500 transition">About</a></li>
              <li><a href="#" className="hover:text-gnom-green-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-gnom-green-500 transition">Jobs</a></li>
              <li><a href="#" className="hover:text-gnom-green-500 transition">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gnom-green-400">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-gnom-green-500 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gnom-green-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gnom-green-500 transition">License</a></li>
            </ul>
          </div>
        </div>

        {/* Нижняя линия и копирайт */}
        <div className="mt-8 border-t border-gnom-green-400 pt-4 text-center text-sm text-muted-foreground">
          © 2024 GNOM Network. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
