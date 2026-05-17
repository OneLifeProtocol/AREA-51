import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Clock } from "lucide-react"
import WhatsappButton from "@/components/whatsapp-button"

export default function ManicurePedicurePage() {
  return (
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
              href="/"
              className="font-heading text-white/90 hover:text-orange-500 transition-colors text-2xl font-bold [text-shadow:_0_0_10px_rgba(255,255,255,0.5)] hover:[text-shadow:_0_0_15px_rgba(255,255,255,0.8)]"
            >
              HOME
            </Link>
            <Link
              href="/#servizi"
              className="font-heading text-white/90 hover:text-orange-500 transition-colors text-2xl font-bold [text-shadow:_0_0_10px_rgba(255,255,255,0.5)] hover:[text-shadow:_0_0_15px_rgba(255,255,255,0.8)]"
            >
              SERVIZI
            </Link>
            <Link
              href="/#testimonials"
              className="font-heading text-white/90 hover:text-orange-500 transition-colors text-2xl font-bold [text-shadow:_0_0_10px_rgba(255,255,255,0.5)] hover:[text-shadow:_0_0_15px_rgba(255,255,255,0.8)]"
            >
              TESTIMONIALS
            </Link>
            <Link
              href="/#contatti"
              className="font-heading text-white/90 hover:text-orange-500 transition-colors text-2xl font-bold [text-shadow:_0_0_10px_rgba(255,255,255,0.5)] hover:[text-shadow:_0_0_15px_rgba(255,255,255,0.8)]"
            >
              CONTATTI
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section with Cosmic Green Background */}
      <section className="relative py-12 overflow-hidden">
        {/* Cosmic Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "url('/cosmic-green.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

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

          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-2 text-white tracking-tight leading-tight [text-shadow:_0_0_10px_rgba(255,255,255,0.5)]">
              Manicure e Pedicure
              <br />
              <span className="text-orange-500">Cosmiche</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed">
              Un viaggio sensoriale per le tue mani e i tuoi piedi.
              <br />
              Trattamenti di lusso in un ambiente futuristico.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-10 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salone%202.PNG-GQSjPxBkltIHriMWYNqUQExiAG7UiM.png"
                  width={800}
                  height={600}
                  alt="Area dedicata a manicure e pedicure - Salone Area 51"
                  className="w-full h-auto object-cover max-h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            <div>
              <div className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-orange-500/30 shadow-[0_0_20px_rgba(255,102,25,0.3)]">
                <h2 className="font-heading text-3xl font-bold [text-shadow:_0_0_8px_rgba(255,255,255,0.4)]">
                  Un'esperienza di relax totale
                </h2>
                <p className="text-white/90 text-lg">
                  Nel nostro salone Area 51, la manicure e la pedicure diventano un'esperienza sensoriale completa. Le
                  nostre postazioni ergonomiche e l'ambiente rilassante ti faranno sentire come in un'oasi di pace,
                  lontano dallo stress quotidiano.
                </p>
              </div>
            </div>
          </div>

          {/* Micro invito a prenotare con CTA button */}
          <div className="text-center mb-12 flex flex-col items-center">
            <div className="mb-4">
              <Button
                size="default"
                className="bg-orange-500 hover:bg-orange-600 text-black text-lg font-bold px-8 py-2 shadow-[0_0_10px_rgba(255,102,25,0.5)] transition-all hover:shadow-[0_0_15px_rgba(255,102,25,0.7)] hover:scale-105 animate-pulse-glow rounded-lg"
              >
                PRENOTA IL TUO MOMENTO DI RELAX!
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-orange-500/30 shadow-[0_0_20px_rgba(255,102,25,0.3)]">
                <h2 className="font-heading text-3xl font-bold [text-shadow:_0_0_8px_rgba(255,255,255,0.4)]">
                  Tecniche all'avanguardia
                </h2>
                <p className="text-white/90 text-lg">
                  I nostri esperti utilizzano tecniche innovative e prodotti di alta qualità per garantire risultati
                  impeccabili. Ogni trattamento è un viaggio sensoriale che coccola le tue mani e i tuoi piedi, donando
                  loro nuova vita e splendore.
                </p>

                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Prodotti premium selezionati per nutrire in profondità</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Tecniche di massaggio che sciolgono ogni tensione</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Ambiente rilassante con musica ambient e aromaterapia</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Design personalizzati che riflettono la tua personalità</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salone%203.PNG-ykKo0uttfwdwQkfYpvRSsmtGlquz1Y.png"
                  width={800}
                  height={600}
                  alt="Area manicure del Salone Area 51"
                  className="w-full h-auto object-cover max-h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Testimonianze con animazione */}
          <div className="mb-12"></div>

          {/* Micro invito a prenotare */}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prenota" className="py-10 bg-gray-900/80 relative">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('/cosmic-green.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 [text-shadow:_0_0_8px_rgba(255,255,255,0.4)]">
              I Nostri Trattamenti
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Scegli tra la nostra gamma di trattamenti premium per mani e piedi, progettati per offrirti un'esperienza
              di bellezza e relax senza precedenti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Trattamento 1 - Manicure Cosmica - Link modificato per portare all'inizio pagina */}
            <Link href="#">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-orange-500/30 hover:border-orange-500/50 transition-all hover:shadow-[0_0_20px_rgba(255,102,25,0.3)] group">
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  Manicure Cosmica
                </h3>
                <p className="text-white/70 mb-4">
                  Lasciati trasportare in un viaggio sensoriale dove le tue mani rinascono. Un'esperienza che trascende
                  la semplice cura estetica.
                </p>
                <p className="text-2xl font-bold text-orange-500 mb-4">€35</p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-orange-500 mr-2" />
                    <span>45 minuti di puro abbandono sensoriale</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-orange-500 mr-2" />
                    <span>Risveglio della pelle con cristalli esfolianti</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-orange-500 mr-2" />
                    <span>Massaggio che scioglie tensioni dimenticate</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-orange-500 mr-2" />
                    <span>Colori vibranti che raccontano la tua essenza</span>
                  </li>
                </ul>
              </div>
            </Link>

            {/* Trattamento 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-orange-500/30 hover:border-orange-500/50 transition-all hover:shadow-[0_0_20px_rgba(255,102,25,0.3)] group">
              <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                Pedicure Stellare
              </h3>
              <p className="text-white/70 mb-4">
                Un viaggio interstellare per i tuoi piedi, dove ogni passo del trattamento ti porta più lontano dallo
                stress terrestre.
              </p>
              <p className="text-2xl font-bold text-orange-500 mb-4">€45</p>
              <ul className="space-y-2 text-white/80 mb-6">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-orange-500 mr-2" />
                  <span>60 minuti di fluttuazione in assenza di gravità</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Bagno in acque cosmiche arricchite di minerali</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Liberazione della pelle stanca con polvere di stelle</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Massaggio che risveglia energie sopite</span>
                </li>
              </ul>
            </div>

            {/* Trattamento 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-orange-500/30 hover:border-orange-500/50 transition-all hover:shadow-[0_0_20px_rgba(255,102,25,0.3)] group">
              <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                Pacchetto Galattico
              </h3>
              <p className="text-white/70 mb-4">
                L'esperienza suprema: un viaggio attraverso dimensioni di bellezza e relax che trasformerà ogni
                centimetro delle tue estremità.
              </p>
              <p className="text-2xl font-bold text-orange-500 mb-4">€75</p>
              <ul className="space-y-2 text-white/80 mb-6">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-orange-500 mr-2" />
                  <span>2 ore di viaggio interdimensionale di bellezza</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Rituale di rinascita per mani stanche e stressate</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Cerimonia di purificazione per piedi affaticati</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Arte cosmica personalizzata che riflette la tua anima</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black text-2xl font-extrabold px-12 py-8 shadow-[0_0_15px_rgba(255,102,25,0.5)] transition-all hover:shadow-[0_0_20px_rgba(255,102,25,0.7)] hover:scale-105 animate-pulse-glow rounded-xl"
            >
              PRENOTA ORA
            </Button>

            {/* Spazio vuoto per mantenere la struttura */}

            <p className="mt-6 text-white/60 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Risposta rapida, conferma immediata
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contatti" className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="inline-block mb-4">
                <div className="bg-gray-800/80 p-2 rounded-lg border border-orange-500/20 shadow-[0_0_15px_rgba(255,102,25,0.3)]">
                  <Image
                    src="/logo-salone.png"
                    alt="Salone Area 51 Logo"
                    width={120}
                    height={50}
                    className="object-contain mix-blend-screen opacity-90"
                  />
                </div>
              </Link>
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
              <div className="w-full h-[250px] rounded-lg overflow-hidden border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.0123033893!2d11.275443376592837!3d44.47799767899378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd5639cfb0eb1%3A0x52058c9123e817a8!2s51%E5%8C%BA%20Salone%20Salone%20Area%2051!5e0!3m2!1sit!2sit!4v1714323456789!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
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
  )
}
