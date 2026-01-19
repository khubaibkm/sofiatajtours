"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-secondary/20 transition-all duration-300">
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        <span>📞 Call us: +91-9876543210 | +91-8765432109 | 📧 hello@sofiajtajtours.com</span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <span className="text-sm font-bold text-primary-foreground">ST</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-primary text-base leading-none">Sofia</span>
              <span className="text-xs text-secondary font-medium">Taj Tours</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/tours?category=taj-mahal"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              Taj Mahal Tours
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/tours?category=delhi"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              Delhi Tours
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/tours?category=golden-triangle"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              Golden Triangle Tours
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-flex px-7 py-2.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-sm font-semibold hover:shadow-lg transition-all duration-300 text-sm"
          >
            Book Now
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border animate-in fade-in duration-200">
            <Link
              href="/"
              className="block py-3 text-sm font-medium text-foreground hover:text-primary hover:pl-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tours?category=taj-mahal"
              className="block py-3 text-sm font-medium text-foreground hover:text-primary hover:pl-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Taj Mahal Tours
            </Link>
            <Link
              href="/tours?category=delhi"
              className="block py-3 text-sm font-medium text-foreground hover:text-primary hover:pl-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Delhi Tours
            </Link>
            <Link
              href="/tours?category=golden-triangle"
              className="block py-3 text-sm font-medium text-foreground hover:text-primary hover:pl-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Golden Triangle Tours
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-sm font-medium text-foreground hover:text-primary hover:pl-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mt-4 px-4 py-2.5 bg-primary text-primary-foreground rounded-sm font-semibold text-center text-sm hover:shadow-md transition-all"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
