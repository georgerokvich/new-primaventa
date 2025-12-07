'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-midnight-slate text-white pt-8 pb-6 rounded-t-[40px] -mt-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#0B162A] via-champagne-gold to-[#0B162A]" />

      <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: Brand */}
            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="font-serif text-xl text-white tracking-[0.12em]">Prima Venta</h3>
              <span className="font-sans text-[10px] text-gray-500 italic tracking-wide">
                Partnerstvo koje pravi razliku.
              </span>
            </div>

            {/* Center: Nav */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-3 text-xs font-sans uppercase tracking-[0.2em] text-white/80">
              <NavLink href="#o-nama">O NAMA</NavLink>
              <Separator />
              <NavLink href="#galerija">GALERIJA</NavLink>
              <Separator />
              <NavLink href="#asortiman">ASORTIMAN</NavLink>
              <Separator />
              <NavLink href="#kontakt">KONTAKT</NavLink>
            </div>

            {/* Right: Socials */}
            <div className="flex flex-row items-center justify-center gap-3">
              <SocialButton icon={Instagram} href="https://instagram.com/primaventa.rs" />
              <SocialButton icon={Linkedin} href="#" />
              <SocialButton icon={Facebook} href="#" />
            </div>
          </div>

          <div className="border-t border-white/10 pt-3 flex flex-col md:flex-row items-center justify-between text-[10px] text-gray-600 gap-2">
            <span>© 2025 Prima Venta</span>
            <div className="flex items-center gap-2">
              <a href="/uslovi-koriscenja" className="hover:text-champagne-gold transition-colors">Uslovi korišćenja</a>
              <span>•</span>
              <a href="/privatnost" className="hover:text-champagne-gold transition-colors">Politika privatnosti</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Separator() {
  return <span className="text-[#E3C16F]">•</span>
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-xs font-sans uppercase tracking-[0.3em] text-white transition-colors hover:text-champagne-gold"
    >
      {children}
    </a>
  )
}

function SocialButton({ icon: Icon, href }: { icon: any, href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white/70 transition-all duration-300 ease-out hover:bg-[#E3C16F] hover:border-[#E3C16F] hover:text-[#0B162A] hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.35)]"
    >
      <Icon size={24} />
    </a>
  )
}
