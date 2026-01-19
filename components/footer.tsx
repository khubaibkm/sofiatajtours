import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="w-10 h-10 bg-secondary text-primary rounded-sm flex items-center justify-center mb-4 font-bold text-lg">
              ST
            </div>
            <h3 className="font-serif font-bold text-lg mb-2">Sofia Taj Tours</h3>
            <p className="text-sm opacity-90">
              Experience the timeless beauty and majesty of the Taj Mahal with expertly curated tours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tours" className="opacity-80 hover:opacity-100 transition-all duration-300">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91-9876543210</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91-8765432109</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@sofiajtajtours.com</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <MapPin size={16} />
                <span>Agra, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Newsletter</h4>
            <p className="text-sm opacity-90 mb-3">Subscribe for exclusive offers and travel guides.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-sm bg-primary-foreground/15 text-primary-foreground placeholder:opacity-60 text-sm"
                required
              />
              <button className="px-3 py-2 bg-secondary text-primary rounded-sm font-medium text-sm hover:bg-secondary/90 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-75">
            © {new Date().getFullYear()} Sofia Taj Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
