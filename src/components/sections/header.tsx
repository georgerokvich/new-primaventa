'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] } }
}

const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] } }
}

export function Header() {
  return (
    <motion.header
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="w-full bg-[#1B365D] relative z-50"
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div variants={slideUp}>
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-playfair text-[#C5A572] font-bold">
                Prima Venta
              </h1>
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            variants={slideUp}
            className="hidden md:flex items-center gap-8"
          >
            {[
              { text: "POČETNA", href: '/' },
              { text: "O NAMA", href: '/about' },
              { text: "USLUGE", href: '/services' },
              { text: "ASORTIMAN", href: '/asortiman' },
              { text: "KONTAKT", href: '/contact' }
            ].map((item, i) => (
              <motion.div
                key={item.href}
                whileHover={{ 
                  y: -2,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
              >
                <Link 
                  href={item.href}
                  className="text-white/90 hover:text-[#C5A572] font-montserrat text-sm font-medium tracking-wider transition-colors duration-300"
                >
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile menu button */}
          <motion.button
            variants={slideUp}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="w-6 h-0.5 bg-white/90"></span>
            <span className="w-6 h-0.5 bg-white/90"></span>
            <span className="w-6 h-0.5 bg-white/90"></span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
