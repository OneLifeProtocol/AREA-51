"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

type Testimonial = {
  quote: string
  author: string
  rating: number
}

export default function AnimatedTestimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Un'esperienza fantastica! L'ambiente moderno e il design futuristico rendono tutto magico. Mi sono sentita trasportata in un'altra dimensione.",
      author: "Giulia M.",
      rating: 5,
    },
    {
      quote:
        "Staff gentilissimo e super professionale. Ogni volta che entro mi sento accolto come un amico. Ho finalmente trovato il mio salone di fiducia a Bologna.",
      author: "Marco T.",
      rating: 5,
    },
    {
      quote:
        "Massima cura e attenzione ai dettagli. Il taglio perfetto ogni volta e un servizio clienti impeccabile. L'ambiente è davvero unico.",
      author: "Sofia R.",
      rating: 5,
    },
    {
      quote:
        "I trattamenti per capelli sono eccezionali! Il mio colore è durato più a lungo di qualsiasi altro salone abbia provato prima.",
      author: "Laura B.",
      rating: 5,
    },
    {
      quote:
        "La manicure è stata perfetta, con una cura dei dettagli impressionante. Mi sono sentita coccolata dall'inizio alla fine, un'esperienza davvero stellare!",
      author: "Chiara D.",
      rating: 5,
    },
    {
      quote:
        "Ho provato il trattamento capelli e sono rimasto stupito dal risultato. L'ambiente futuristico e il personale competente hanno reso l'esperienza unica. Tornerò sicuramente!",
      author: "Marco B.",
      rating: 5,
    },
    {
      quote:
        "Un'esperienza davvero rilassante! Le mie mani non sono mai state così curate. Il massaggio è stato divino e lo smalto è durato settimane.",
      author: "Chiara B.",
      rating: 5,
    },
    {
      quote:
        "La pedicure stellare è stata fantastica! I miei piedi erano stanchi e stressati, ora sembrano rinati. Tornerò sicuramente per altri trattamenti.",
      author: "Marco L.",
      rating: 5,
    },
    {
      quote:
        "Ho provato il pacchetto galattico e ne sono rimasta incantata! L'ambiente è futuristico, il personale attento e i risultati eccezionali.",
      author: "Sofia R.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const visibleTestimonials = 4 // Mostra 4 recensioni contemporaneamente

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - visibleTestimonials + 1))
        setIsAnimating(false)
      }, 800) // Ridotto da 2000ms a 800ms per una transizione più veloce
    }, 6000) // Manteniamo lo stesso intervallo totale di 6 secondi

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[...Array(visibleTestimonials)].map((_, i) => {
        const testimonialIndex = (currentIndex + i) % testimonials.length
        return (
          <div key={i} className="relative h-[200px] flex items-center justify-center">
            <div
              className={`absolute w-full max-w-md mx-auto text-center transition-all duration-800 
                ${isAnimating ? "opacity-0 transform scale-95 blur-sm" : "opacity-100 transform scale-100"}`}
              style={{
                transition: "all 0.8s ease-in-out", // Ridotto da 2s a 0.8s
              }}
            >
              <div className="flex justify-center mb-3">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-orange-500 fill-orange-500" />
                ))}
              </div>

              <p className="italic text-white/90 text-lg mb-4 font-medium">"{testimonials[testimonialIndex].quote}"</p>

              <p className="text-orange-500 font-bold">— {testimonials[testimonialIndex].author}</p>

              {isAnimating && <div className="absolute inset-0 pointer-events-none stars-fade-out"></div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
