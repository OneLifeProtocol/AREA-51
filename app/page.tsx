import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Scissors, Sparkles, Brush, Star, Clock } from "lucide-react"
import AnimatedTestimonials from "@/components/animated-testimonials"
import GoogleMap from "@/components/google-map"
import InfiniteCarousel from "@/components/infinite-carousel"
import WhatsappButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      {/* Other sections of the page would go here */}
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation */}
        <header className="container mx-auto py-3 px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-salone.png"
                alt="Salone Area 51 Logo"
                width={120}
                height={50}
                className="object-contain mix-blend-screen opacity-90"
              />
            </Link>
            <nav className="flex gap-10">
              <Link
                href="#"
                className="font-heading text-white/90 hover:text-orange-500 transition-colors text-2xl font-bold [text-shadow:_0_0_10px_rgba(255,255,255,0.5)] hover:[text-shadow:_0_0_15px_rgba(255,255,255,0.8)]"
              >
                HOME
              </Link>
              <Link
                href="#servizi"
                className="font-heading text-white/90 hover:text-orange-500 transition-colors text-2xl font-bold [text-shadow:_0_0_10px_rgba(255,255,255,0.5)] hover:[text-shadow:_0_0_15px_rgba(255,255,255,0.8)]"
              >
                SERVIZI
              </Link>
              <Link
                href="#testimonials"
                className="font-heading text-white/90 hover:text-orange-500 transition-colors text-2xl font-bold [text-shadow:_0_0_10px_rgba(255,255,255,0.5)] hover:[text-shadow:_0_0_15px_rgba(255,255,255,0.8)]"
              >
                TESTIMONIALS
              </Link>
              <Link
                href="#contatti"
                className="font-heading text-white/90 hover:text-orange-500 transition-colors text-2xl font-bold [text-shadow:_0_0_10px_rgba(255,255,255,0.5)] hover:[text-shadow:_0_0_15px_rgba(255,255,255,0.8)]"
              >
                CONTATTI
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section with Galaxy Grid Background */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Galaxy Grid Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="galaxy-grid animate-float-bg twinkle-effect"></div>

            {/* Grid overlay effect */}
            <div
              className="absolute inset-0 z-1"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), 
                                  linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
                backgroundPosition: "center center",
              }}
            ></div>

            {/* Radial gradient overlay for depth */}
            <div className="absolute inset-0 z-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/20 to-gray-900/60"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tight leading-tight [text-shadow:_0_0_10px_rgba(255,255,255,0.5)]">
                RELAX STELLARE.
                <br />
                BELLEZZA SPAZIALE.
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed font-bold tracking-wide">
                Esplora un nuovo universo di cura e relax con Area 51.
                <br />
                Prenota il tuo viaggio oggi.
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-black text-2xl font-extrabold px-12 py-8 shadow-[0_0_15px_rgba(255,102,25,0.5)] transition-all hover:shadow-[0_0_20px_rgba(255,102,25,0.7)] hover:scale-105 animate-pulse-glow rounded-xl"
              >
                PRENOTA ORA
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 relative">
          {/* Extended galaxy background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="galaxy-grid animate-float-bg twinkle-effect"></div>

            {/* Grid overlay effect */}
            <div
              className="absolute inset-0 z-1"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), 
                          linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
                backgroundPosition: "center center",
              }}
            ></div>

            {/* Radial gradient overlay for depth */}
            <div className="absolute inset-0 z-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/20 to-gray-900/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6 bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold [text-shadow:_0_0_8px_rgba(255,255,255,0.4)]">
                    Un viaggio interstellare nel relax
                  </h2>
                  <p className="text-white text-lg font-medium">
                    Immergiti in un'esperienza sensoriale unica nel nostro salone dal design futuristico. Il nostro
                    ambiente moderno e minimalista, con illuminazione LED geometrica, trasforma ogni trattamento in un
                    momento di puro relax, dove il tempo rallenta e lo stress svanisce.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] animate-float">
                  <Image
                    src="/salone-interior.png"
                    width={800}
                    height={600}
                    alt="Salone Area 51 - Interni del salone"
                    className="w-full h-auto rounded-lg object-cover max-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servizi" className="py-20 bg-gradient-to-b from-gray-900 to-gray-900 relative">
          {/* Transition gradient to create a smooth boundary */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold [text-shadow:_0_0_8px_rgba(255,255,255,0.4)]">
                Trattamenti cosmici per la tua bellezza
              </h2>
              <p className="max-w-2xl mx-auto mt-4 text-white/80">
                Scopri i nostri servizi esclusivi, progettati per elevare la tua bellezza naturale con tecniche
                innovative e prodotti di alta qualità.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard
                icon={<Scissors className="w-10 h-10 text-orange-500" />}
                title="Taglio e Styling"
                description="Lasciati trasportare in un viaggio di trasformazione dove ogni ciocca racconta la tua storia. I nostri maestri cosmici modelleranno la tua chioma in un'opera d'arte vivente."
                bgImage="/cosmic-orange.webp"
                link="/servizi/taglio-styling"
              />

              <ServiceCard
                icon={<Sparkles className="w-10 h-10 text-orange-500" />}
                title="Manicure e Pedicure"
                description="Immergiti in un'oasi di puro relax dove le tue mani e i tuoi piedi rinasceranno. Un viaggio sensoriale che ti lascerà fluttuare tra le stelle."
                bgImage="/cosmic-green.webp"
                link="/servizi/manicure-pedicure"
              />

              <ServiceCard
                icon={<Brush className="w-10 h-10 text-orange-500" />}
                title="Trattamenti Capelli"
                description="Risveglia la vitalità cosmica dei tuoi capelli con rituali nutrienti che penetrano in profondità. Senti l'energia fluire dalla radice alle punte."
                bgImage="/cosmic-blue.webp"
                link="/servizi/trattamenti-capelli"
              />

              <ServiceCard
                icon={<Star className="w-10 h-10 text-orange-500" />}
                title="Cura delle Unghie"
                description="Trasforma le tue unghie in piccole tele dove esprimere la tua personalità. Colori vibranti e design unici che brilleranno come costellazioni."
                bgImage="/cosmic-purple.webp"
                link="/servizi/cura-unghie"
              />
            </div>
            <div className="mt-16">
              <h3 className="text-center font-heading text-2xl font-bold mb-6 [text-shadow:_0_0_8px_rgba(255,255,255,0.4)]">
                Le nostre creazioni
              </h3>
              <InfiniteCarousel
                images={[
                  { src: "/hairstyle-gray-bob.png", alt: "Bob grigio argento" },
                  { src: "/hairstyle-blue-ombre.png", alt: "Sfumatura blu cosmica" },
                  { src: "/hairstyle-purple-ombre.png", alt: "Ombre viola mistico" },
                  { src: "/nails-pink-design.png", alt: "Nail art romantica" },
                  { src: "/hairstyle-silver-waves.png", alt: "Onde argentate" },
                  { src: "/hairstyle-lavender-ombre.png", alt: "Sfumatura lavanda" },
                  { src: "/nails-yellow-lines.png", alt: "Nail art minimalista" },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section - Redesigned with animated testimonials */}
        <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold [text-shadow:_0_0_8px_rgba(255,255,255,0.4)]">
                Cosa dicono di noi
              </h2>
            </div>

            <AnimatedTestimonials />

            <div className="text-center mt-8">
              <Link
                href="https://www.google.it/maps/place/51%E5%8C%BA+Salone+Area+51/@44.4779977,11.2681049,16z/data=!4m12!1m2!2m1!1sparrucchieri+casalecchi!3m8!1s0x477fd5639cfb0eb1:0x52058c9123e817a8!8m2!3d44.4779977!4d11.2776321!9m1!1b1!15sChdwYXJydWNjaGllcmkgY2FzYWxlY2NoaVoZIhdwYXJydWNjaGllcmkgY2FzYWxlY2NoaZIBCmhhaXJfc2Fsb26aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTmtiMHBEYm5KUlJSQUKqAWgKCS9tLzA0cHlwNRABKhsiF3BhcnJ1Y2NoaWVyaSBjYXNhbGVjY2hpKAcyHxABIhvyMApdqg2gVTG5nZiwAl3hOEw8t3mrYDo9ORcyGxACIhdwYXJ1Y2NoaWVyaSBjYXNhbGVjY2hpKeABAPoBBAgAEDw!16s%2Fg%2F11stvcx_s9?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                target="_blank"
                className="text-orange-500 hover:text-orange-400 font-heading text-lg font-bold inline-flex items-center gap-2 [text-shadow:_0_0_5px_rgba(255,102,25,0.3)] hover:[text-shadow:_0_0_8px_rgba(255,102,25,0.5)] transition-all"
              >
                <Star className="w-5 h-5 fill-orange-500" />
                Leggi le recensioni su Google Maps
                <Star className="w-5 h-5 fill-orange-500" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Extended galaxy background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="galaxy-grid animate-float-bg twinkle-effect"></div>

            {/* Grid overlay effect */}
            <div
              className="absolute inset-0 z-1"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), 
                  linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
                backgroundPosition: "center center",
              }}
            ></div>

            {/* Radial gradient overlay for depth */}
            <div className="absolute inset-0 z-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/20 to-gray-900/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto bg-gray-800/30 p-10 rounded-lg border border-gray-700 cosmic-card">
              <div className="text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 [text-shadow:_0_0_8px_rgba(255,255,255,0.4)]">
                  Inizia il tuo viaggio nel mondo Area 51
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Prenota ora e scopri perché i nostri clienti ci scelgono per un'esperienza di bellezza fuori dal
                  comune.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-black text-2xl font-extrabold px-12 py-8 shadow-[0_0_15px_rgba(255,102,25,0.5)] transition-all hover:shadow-[0_0_20px_rgba(255,102,25,0.7)] hover:scale-105 animate-pulse-glow rounded-xl"
                  >
                    PRENOTA ORA
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 hover:bg-white/10 text-white px-8 py-6"
                  >
                    Contattaci
                  </Button>
                </div>
                <p className="mt-6 text-white/60 flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  Risposta rapida, conferma immediata
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contatti" className="py-12 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-heading text-xl font-bold mb-4">Salone Area 51</h3>
                <p className="text-white/70">Via Guglielmo Marconi, 10</p>
                <p className="text-white/70">40033 Casalecchio di Reno BO</p>
                <p className="text-white/70 mt-2">Tel: +39 324 823 1010</p>
                <Link
                  href="https://wa.me/393248231010"
                  target="_blank"
                  className="mt-3 inline-flex items-center text-white/70 hover:text-white transition-colors gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="text-green-500"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Scrivici su WhatsApp
                </Link>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold mb-4">Orari di Apertura</h3>
                <p className="text-white/70">Tutti i giorni: 9:00 - 20:00</p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold mb-4">Seguici</h3>
                <div className="flex gap-4">
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold mb-4">Dove siamo</h3>
                <GoogleMap />
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50">
              <p>© {new Date().getFullYear()} Salone Area 51. Tutti i diritti riservati.</p>
            </div>
          </div>
        </footer>

        {/* WhatsApp Button fisso */}
        <WhatsappButton />
      </div>
    </main>
  )
}

// Modifica la funzione ServiceCard per renderla cliccabile e collegata alla pagina del servizio

function ServiceCard({
  icon,
  title,
  description,
  bgImage,
  link = "#",
}: {
  icon: React.ReactNode
  title: string
  description: string
  bgImage: string
  link?: string
}) {
  return (
    <Link href={link}>
      <Card className="relative bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all hover:shadow-[0_0_25px_rgba(255,102,25,0.7)] active:shadow-[0_0_30px_rgba(255,102,25,0.9)] group cosmic-card p-6 cursor-pointer transform hover:scale-105 active:scale-102 overflow-hidden">
        {/* Cosmic background image with exactly 50% opacity */}
        <div
          className="absolute inset-0 z-0 opacity-50 transition-opacity"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 z-0 bg-gray-900/30"></div>

        {/* Content with higher z-index to ensure visibility */}
        <CardContent className="p-6 relative z-10">
          <div className="mb-4 transition-transform group-hover:scale-110">{icon}</div>
          <CardTitle className="font-heading text-2xl mb-3 group-hover:text-orange-500 transition-colors [text-shadow:_0_0_10px_rgba(0,0,0,0.9)]">
            {title}
          </CardTitle>
          <CardDescription className="text-white text-lg font-medium [text-shadow:_0_0_8px_rgba(0,0,0,1)]">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
