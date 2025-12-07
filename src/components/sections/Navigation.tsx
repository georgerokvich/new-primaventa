'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Download, Menu, X } from 'lucide-react'
import { generateProductCatalogPdf } from '@/lib/pdf-generator'
import { useSmoothScroll } from '@/components/providers/SmoothScrollProvider'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedNav, setSelectedNav] = useState<string | null>(null)
  const { scrollToSection, activeSection } = useSmoothScroll()

  const navLinks = useMemo(
    () => [
      { label: 'O NAMA', href: '#o-nama', target: 'o-nama' },
      { label: 'GALERIJA', href: '#galerija', target: 'galerija' },
      { label: 'ASORTIMAN', href: '#asortiman', target: 'asortiman' },
      { label: 'KONTAKT', href: '#kontakt', target: 'kontakt' },
    ],
    []
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [menuOpen])

  const handleDownloadCatalog = () => {
    generateProductCatalogPdf()
    setMenuOpen(false)
  }

  const handleNavAction = (target: string) => {
    setSelectedNav(target)
    scrollToSection(target)
    setMenuOpen(false)
  }

  // Visual State Variables
  const isDarkBg = !scrolled && !menuOpen // Hero state (Top)

  // Text Colors
  const textColorClass = isDarkBg ? 'text-white' : 'text-[#0B162A]'

  // Button Variant
  const buttonVariantClass = scrolled
    ? 'bg-champagne-gold text-midnight-slate shadow-md hover:bg-midnight-slate hover:text-champagne-gold hover:shadow-lg'
    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] flex items-center justify-center px-4 sm:px-6
          ${scrolled
            ? 'top-4 max-w-[850px] mx-auto rounded-full bg-white/70 backdrop-blur-xl border border-slate-200 shadow-2xl py-3'
            : 'top-0 max-w-full mx-auto rounded-none bg-white/0 backdrop-blur-none border-transparent shadow-none py-6'
          }`}
      >
        <div className="flex w-full max-w-[1100px] items-center justify-between">
          {/* Brand (scroll-to-top) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`hidden md:inline-flex font-serif font-bold ${scrolled ? 'text-sm md:text-base' : 'text-base md:text-lg'} tracking-[0.08em] leading-tight transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${scrolled ? 'opacity-100 translate-x-0 text-[#0B162A]' : 'opacity-100 translate-x-0 text-white'}`}
          >
            Prima Venta
          </button>

          {/* Desktop Navigation */}
          <motion.div
            layout
            className="hidden md:flex items-center justify-end gap-8 whitespace-nowrap w-max ml-auto"
          >
            {navLinks.map((link) => {
              const current = selectedNav ?? activeSection
              const isActive = current === link.target
              return (
                <a
                  key={link.target}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection(link.target)
                  }}
                  className={`group relative font-body text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 py-2
                    ${isActive
                      ? 'text-champagne-gold'
                      : `${textColorClass} hover:text-champagne-gold`
                    }`}
                >
                  {link.label}
                  {/* Gradient Underline - Fades at Ends */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] w-full origin-left bg-gradient-to-r from-transparent via-champagne-gold to-transparent transition-transform duration-300 ease-out ${isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </a>
              )
            })}

            <button
              className={`group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-8 py-3 font-body text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.02] border ${scrolled
                  ? 'bg-champagne-gold text-midnight-slate shadow-[0_6px_20px_rgba(201,169,97,0.3)] hover:shadow-[0_8px_30px_rgba(201,169,97,0.45)] border-champagne-gold/20'
                  : 'bg-white/10 text-white shadow-none border-transparent'
                }`}
              onClick={handleDownloadCatalog}
            >
              <Download className="relative z-10 w-4 h-4" />
              <span className="relative z-10">Katalog</span>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden absolute right-4 z-50 p-2 transition-colors ${textColorClass}`}
            aria-label="Otvori navigaciju"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-white/90 md:hidden flex items-center justify-center p-6"
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-sm text-center">
              <span className="font-sans font-bold text-3xl text-midnight-slate mb-4">Meni</span>

              {navLinks.map((link) => {
                const isActive = activeSection === link.target
                return (
                  <button
                    key={link.target}
                    onClick={() => handleNavAction(link.target)}
                    className={`text-xl font-sans font-bold transition-all ${isActive
                      ? 'text-champagne-gold scale-110'
                      : 'text-charcoal hover:text-champagne-gold'
                      }`}
                  >
                    {link.label}
                  </button>
                )
              })}

              <div className="w-12 h-[1px] bg-charcoal/10 my-4" />

              <button
                onClick={handleDownloadCatalog}
                className="flex items-center gap-2 rounded-full bg-charcoal text-white px-8 py-4 font-montserrat text-xs font-bold tracking-[0.2em] uppercase shadow-xl hover:bg-champagne-gold transition-colors"
              >
                <Download className="w-4 h-4" />
                Preuzmi Katalog
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
