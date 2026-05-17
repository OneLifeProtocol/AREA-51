"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface CarouselImage {
  src: string
  alt: string
}

export default function InfiniteCarousel({
  images,
  speed = 30,
  gap = 20,
}: {
  images: CarouselImage[]
  speed?: number
  gap?: number
}) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!scrollerRef.current) return

    // Add animation after component mounts to prevent initial jump
    setTimeout(() => setStart(true), 100)

    // Clone the scroller content for seamless looping
    const scrollerContent = Array.from(scrollerRef.current.children)

    // Append cloned items
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem)
      }
    })
  }, [])

  return (
    <div className="relative overflow-hidden w-full py-4 bg-gray-900/50 backdrop-blur-sm group">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-900 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-900 to-transparent"></div>

      <div
        ref={scrollerRef}
        className={`flex ${start ? "animate-scroll" : ""} group-hover:[animation-play-state:paused]`}
        style={
          {
            "--scroll-speed": `${speed}s`,
            "--gap": `${gap}px`,
            gap: `${gap}px`,
          } as React.CSSProperties
        }
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.7)] border border-gray-700/50 group"
            style={{ minWidth: "280px", height: "350px" }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={280}
              height={350}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white font-medium text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              {image.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
