import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display, Montserrat, DM_Serif_Display, Cormorant } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit'
})

// Legacy fonts maintained for safety during transition
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: ['400'], variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: "Prima Venta - Vaš Pouzdan Partner u HoReCa Sektoru",
  description: "Prima Venta - Pouzdana isporuka kvalitetnih namirnica za hotele, restorane i kafee širom Srbije.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${outfit.variable} ${inter.variable} ${playfair.variable} ${montserrat.variable} ${cormorant.variable} ${dmSerif.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-slate-700 bg-slate-50">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
