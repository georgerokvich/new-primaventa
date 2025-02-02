import * as React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat, DM_Serif_Display } from 'next/font/google'
import { Cormorant } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const cormorant = Cormorant({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
})

const dmSerif = DM_Serif_Display({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
})

export const metadata: Metadata = {
  title: 'Prima Venta',
  description: 'Your modern e-commerce solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${montserrat.variable} ${inter.variable} ${cormorant.variable} ${dmSerif.variable}`}>
      <body className="font-montserrat">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 