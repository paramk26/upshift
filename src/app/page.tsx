'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden font-sans">

      {/* Top Navigation */}
      <header className="z-10 flex justify-between items-center p-6 relative">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Upshift Racing Logo" width={150} height={150} />
        </Link>

        <nav className="flex items-center gap-6 text-base font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:text-[#14CDC8] hover:bg-transparent">
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
          <Link href="/tracks" className="hover:text-[#14CDC8] transition">Track Experience</Link>
          <Link href="/about" className="hover:text-[#14CDC8] transition">About Us</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="z-10 flex-1 flex flex-col md:flex-row justify-between items-center px-8 sm:px-20 py-16 relative">
        {/* Left Text Content */}
        <motion.div
          className="max-w-xl flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Redefining Racing in India
          </h1>
          <p className="text-lg text-gray-300">
            High-performance Formula-style race cars. Iconic karting tracks. A lifestyle built on speed, style, and precision.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/products/ascent">
              <Button className="bg-[#14CDC8] text-black hover:bg-[#10b9b3] transition">
                Explore Cars
              </Button>
            </Link>
            <Link href="/tracks">
              <Button variant="outline" className="border-[#14CDC8] text-[#14CDC8] hover:bg-[#0b2e2c]">
                Book a Track Day
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Car Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 md:mt-0 md:w-[45%] lg:w-[40%] relative"
        >
          <Image
            src="/apex.png"
            alt="Upshift Racing Car"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="h-[60px] z-10 w-full flex justify-between items-center text-sm text-gray-400 px-6 border-t border-gray-700 bg-[#0e0e0e]">
        <div className="flex flex-wrap gap-4">
          <span>📞 +91 98765 43210</span>
          <span>📧 contact@upshiftracing.com</span>
          <span>📷 @upshiftracing</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-[#14CDC8]">About Us</Link>
          <Link href="/contact" className="hover:text-[#14CDC8]">Contact</Link>
          <Link href="/privacy" className="hover:text-[#14CDC8]">Privacy</Link>
        </div>
      </footer>
    </div>
  )
}
