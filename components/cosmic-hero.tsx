"use client"

import { useEffect, useRef } from "react"

export default function CosmicHero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Galaxy Background with Parallax Effect */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0 animate-pulse-opacity opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage: "url('/galaxy-background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  )
}
