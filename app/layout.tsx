import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "GNOM - Decentralized Social Network",
  description: "GNOM is the world's first blockchain-based social network for monetizing ideas.",
  icons: {
    icon: "/favicon.ico", // Основная иконка
    shortcut: "/favicon.ico", // Ярлык
    apple: "/favicon.png", // Для iOS
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
