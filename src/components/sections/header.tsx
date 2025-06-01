'use client'

import * as React from 'react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full bg-[#1B365D] relative z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo - matching homepage design */}
          <div>
            <Link href="/" className="flex flex-col items-start">
              <div className="flex items-center">
                <span className="font-playfair text-3xl font-bold text-[#C5A572] tracking-tight">Prima</span>
                <div className="mx-2 w-[1px] h-7 bg-gradient-to-b from-[#C5A572]/60 to-[#C5A572]/10" />
                <span className="font-montserrat text-3xl font-light text-white tracking-wider">Venta</span>
              </div>
              <span className="block font-montserrat text-[11px] uppercase tracking-[0.2em] ml-1 text-[#C5A572]/80 mt-1">
                Premium HoReCa Partner
              </span>
            </Link>
          </div>

          {/* Navigation - matching homepage */}
          <nav className="hidden md:flex items-center gap-14">
            {[
              { text: "O NAMA", href: '/about' },
              { text: "USLUGE", href: '/services' },
              { text: "ASORTIMAN", href: '/asortiman' },
              { text: "KONTAKT", href: '/contact' }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="font-montserrat text-[13px] text-white/90 hover:text-[#C5A572] transition-colors duration-150 relative group tracking-[0.2em] font-medium"
              >
                {item.text}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C5A572] via-[#C5A572] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />
              </Link>
            ))}
          </nav>

          {/* Action Button - matching homepage */}
          <div className="hidden lg:block">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-[#C5A572] text-white font-montserrat text-sm font-medium tracking-wider hover:bg-[#C5A572]/90 transition-colors duration-150"
            >
              ZATRAŽITE PONUDU
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-0.5 bg-white/90"></span>
            <span className="w-6 h-0.5 bg-white/90"></span>
            <span className="w-6 h-0.5 bg-white/90"></span>
          </button>
        </div>
      </div>
    </header>
  )
}
