"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#", label: "HOME" },
  { href: "#servizi", label: "SERVIZI" },
  { href: "#testimonials", label: "RECENSIONI" },
  { href: "#contatti", label: "CONTATTI" },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      {/* Hamburger button — visible only on mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center justify-center w-11 h-11 text-white/90 hover:text-orange-500 transition-colors"
        aria-label="Apri menu di navigazione"
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* Full-screen overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-gray-900/98 backdrop-blur-md flex flex-col items-center justify-center">
          {/* Galaxy dots background */}
          <div className="absolute inset-0 galaxy-grid opacity-30 pointer-events-none" />

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-white/80 hover:text-orange-500 transition-colors"
            aria-label="Chiudi menu"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Nav links */}
          <nav className="flex flex-col items-center gap-10 relative z-10">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-4xl font-bold text-white/90 hover:text-orange-500 transition-colors [text-shadow:_0_0_15px_rgba(255,255,255,0.4)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
