import type React from "react"
import type { Metadata } from "next"
import { Inter_Tight, Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-display" })
const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-accent" })

export const metadata: Metadata = {
  title: "FRANCIS PANGANIBAN",
  description: "Personal portfolio showcasing my work and skills - Versio",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth transition-colors duration-300 dark" suppressHydrationWarning>
      <body className={`${interTight.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
