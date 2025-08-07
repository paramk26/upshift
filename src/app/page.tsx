'use client'

import Image from 'next/image'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#14CDC8]/20 via-black to-[#14CDC8]/10 blur-2xl animate-pulse"
      />

      {/* Header */}
      <header className="z-10 flex justify-between items-center p-6 relative">
        {/* Logo only */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Upshift Racing Logo" width={100} height={100} />
        </Link>

        {/* Navigation */}
        <nav className="relative flex items-center gap-6 text-sm sm:text-base font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-white hover:text-[#14CDC8] hover:bg-transparent font-normal text-base"
              >
                Products
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-white text-black">
              <DropdownMenuItem asChild>
                <Link href="/products/ascent">Upshift Ascent</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/products/apex">Upshift Apex</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/tracks" className="hover:text-[#14CDC8] transition font-normal text-base">
            Track Experience
          </Link>
          <Link href="/about" className="hover:text-[#14CDC8] transition font-normal text-base">
            About Us
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="z-10 flex flex-col items-center text-center px-6 py-20 gap-6 max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src="/logo.png" alt="Upshift Logo" width={180} height={180} />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Redefining Racing in India
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          High-performance Formula-style race cars. Iconic karting tracks. A lifestyle built on speed, style, and precision.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-8 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <Link href="/products/ascent">
            <Button className="bg-[#14CDC8] text-black hover:bg-[#0ebeb3]">
              Explore Cars
            </Button>
          </Link>
          <Link href="/tracks">
            <Button
              variant="outline"
              className="border-[#14CDC8] text-[#14CDC8] hover:bg-[#0b2e2c]"
            >
              Book a Track Day
            </Button>
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] border-t border-gray-800 py-2 px-6 text-xs text-gray-400 z-10 relative">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6 text-center sm:text-left">
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <a href="tel:+919876543210" className="hover:text-[#14CDC8]">📞 +91 98765 43210</a>
            <a href="mailto:contact@upshiftracing.com" className="hover:text-[#14CDC8]">📧 contact@upshiftracing.com</a>
            <a href="https://instagram.com/upshiftracing" target="_blank" rel="noopener" className="hover:text-[#14CDC8]">📷 @upshiftracing</a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
            <Link href="/about" className="hover:text-[#14CDC8]">About Us</Link>
            <Link href="/contact" className="hover:text-[#14CDC8]">Contact</Link>
            <Link href="/privacy" className="hover:text-[#14CDC8]">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
