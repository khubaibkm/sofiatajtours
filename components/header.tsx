"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-secondary/20 transition-all duration-300">
      <div className="bg-primary text-primary-foreground py-2 text-sm font-medium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left side - Call and Email */}
          <div className="flex items-center gap-4 flex-wrap text-xs sm:text-sm">
            <a href="tel:+919368862429" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">+91-9368862429</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:sofiatajtours@gmail.com" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">sofiatajtours@gmail.com</span>
            </a>
          </div>

          {/* Right side - Social Media Icons */}
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="tel:+919368862429" className="hover:text-secondary transition-colors" aria-label="Phone">
              <Phone size={16} />
            </a>
            <a href="https://wa.me/919368862429" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-38 sm:w-48 h-8 sm:h-13 group-hover:scale-105 transition-all duration-300">
              <Image
                src="/logo/logo.png"
                alt="Sofia Taj Tours Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-base font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/tours?category=taj-mahal"
              className="text-base font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              Taj Mahal Tours
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/tours?category=delhi"
              className="text-base font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              Delhi Tours
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/tours?category=golden-triangle"
              className="text-base font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              Golden Triangle Tours
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <Link
            href="/tours"
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
              href="/tours"
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
