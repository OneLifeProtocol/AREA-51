import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Rajdhani } from "next/font/google"
import "./globals.css"
import "./cosmic-animations.css"
import { ThemeProvider } from "@/components/theme-provider"

// Configure the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

// Configure the Rajdhani font
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "Salone Area 51 - Relax stellare. Bellezza spaziale.",
  description: "Esplora un nuovo universo di stile, cura e relax con Area 51. Prenota il tuo viaggio oggi.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={`${spaceGrotesk.variable} ${rajdhani.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
