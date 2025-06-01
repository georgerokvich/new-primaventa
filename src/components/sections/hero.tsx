'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Truck, LineChart, Lightbulb, Star, ChefHat, Utensils, Apple, Store, ShoppingBag, Beef } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2.4, ease: [0.165, 0.84, 0.44, 1] } },
  exit: { opacity: 0, transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] } }
}

const slideUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.165, 0.84, 0.44, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] } }
}

const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 1.4, ease: [0.165, 0.84, 0.44, 1] } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] } }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.6,
    }
  }
}

const navContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    }
  }
}

const scaleUp = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 1.4,
      ease: [0.165, 0.84, 0.44, 1]
    }
  },
  exit: { 
    scale: 0.95, 
    opacity: 0,
    transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }
  }
}

export const Hero = () => {
  return (
    <AnimatePresence>
      <div className="relative min-h-screen w-full bg-[#1B365D] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1.02 }}
          transition={{ duration: 2.4, ease: [0.165, 0.84, 0.44, 1], delay: 0.2 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero/fine-dining-prep.jpg"
            alt="Professional chef preparing gourmet dishes"
            fill
            priority
            quality={100}
            className="object-cover object-[50%_35%] opacity-70"
          />
          {/* Subtle Pattern Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1.6, delay: 0.6 }}
            className="absolute inset-0 bg-[url('/patterns/noise.png')] mix-blend-overlay" 
          />
        </motion.div>

        {/* Enhanced Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: [0.165, 0.84, 0.44, 1] }}
          className="absolute inset-0"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-[#1B365D]/95 via-[#1B365D]/70 to-[#1B365D]/40" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-[#1B365D]/20 via-transparent to-[#1B365D]/30" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.7 }}
            className="absolute inset-0 bg-[#1B365D]/10" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.9 }}
            className="absolute inset-0 bg-gradient-to-tr from-[#C5A572]/12 via-[#C5A572]/5 to-transparent" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.1 }}
            className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/40 via-transparent to-transparent" 
          />
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A572] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
          />
        </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
          <motion.div
            variants={navContainer}
            initial="initial"
            animate="animate"
            className="container mx-auto px-8 pt-8 relative"
          >
          <div className="flex items-center justify-between gap-8">
              {/* Enhanced Logo */}
              <motion.div 
                className="flex flex-col items-start relative"
              >
                <div className="flex items-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.6, delay: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
                    className="absolute -left-3 -top-3 w-12 h-12 bg-[#C5A572]/10 rounded-full blur-lg"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.6, delay: 1, ease: [0.165, 0.84, 0.44, 1] }}
                    className="relative"
                  >
                    <span className="font-playfair text-3xl font-bold text-[#C5A572] tracking-tight">Prima</span>
                  </motion.div>
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1.4, delay: 1.4, ease: [0.165, 0.84, 0.44, 1] }}
                    className="mx-2 w-[1px] h-7 bg-gradient-to-b from-[#C5A572]/60 to-[#C5A572]/10"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.6, delay: 1.8, ease: [0.165, 0.84, 0.44, 1] }}
                    className="relative"
                  >
                    <span className="font-montserrat text-3xl font-light text-white tracking-wider">Venta</span>
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.165, 0.84, 0.44, 1],
                    delay: 1.2
                  }}
                  className="mt-1 relative overflow-hidden"
                >
                  <span className="block font-montserrat text-[11px] uppercase tracking-[0.2em] ml-1 relative">
                    <motion.span 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                      className="inline-block text-[#C5A572]/80 drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.3)]"
                    >
                      Premium
                    </motion.span>{" "}
                    <motion.span 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                      className="inline-block text-white/80"
                    >
                      HoReCa Partner
                    </motion.span>
                  </span>
                  {/* Text highlight effect with built-in shine */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ 
                      duration: 2.8,
                      delay: 2.2,
                      ease: [0.22, 0.03, 0.26, 1]
                    }}
                    className="absolute top-0 left-0 w-[300%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[4deg] pointer-events-none"
                    style={{ 
                      filter: 'blur(1.2px)',
                      mixBlendMode: 'soft-light',
                      transform: 'translateX(-50%)'
                    }}
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C5A572]/30 via-white/10 to-transparent origin-left"
                  />
                </motion.div>
            </motion.div>

              {/* Nav Links with Enhanced Hover */}
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="flex-1 flex items-center justify-center"
              >
                <div className="relative flex flex-col items-center">
              <div className="flex items-center gap-14">
                {[
                      { text: "O NAMA", href: '/about' },
                      { text: "USLUGE", href: '/services' },
                  { text: "ASORTIMAN", href: '/asortiman' },
                  { text: "KONTAKT", href: '/contact' }
                ].map((item, i) => (
                  <motion.div
                    key={item.href}
                        variants={{
                          initial: { opacity: 0, y: 40 },
                          animate: { 
                            opacity: 1, 
                            y: 0,
                            transition: {
                              duration: 1,
                              ease: [0.165, 0.84, 0.44, 1],
                              delay: 1.6 + (i * 0.1)
                            }
                          }
                        }}
                        whileHover={{ 
                          y: -4,
                          transition: { 
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                          }
                        }}
                        animate={{ 
                          y: 0,
                          transition: { 
                            duration: 0.2,
                            ease: [0.165, 0.84, 0.44, 1]
                          }
                        }}
                  >
                    <Link
                      href={item.href}
                      className="font-montserrat text-[13px] text-white/90 hover:text-[#C5A572] transition-colors duration-150 relative group tracking-[0.2em] font-medium cursor-pointer"
                    >
                      {item.text}
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C5A572] via-[#C5A572] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />
                    </Link>
                  </motion.div>
                ))}
              </div>
                  {/* Modern Separator Line */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.6, delay: 1 }}
                    className="absolute -bottom-4 w-[140%] h-[1px] z-50 opacity-90"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent h-[2px] blur-[0.2px]" />
                  </motion.div>
            </div>
              </motion.div>

              {/* Enhanced CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1.2,
                  delay: 2.2,
                  ease: [0.165, 0.84, 0.44, 1]
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.3 } 
                }}
                whileTap={{ 
                  scale: 0.98,
                  y: 0,
                  transition: { duration: 0.2 } 
                }}
              className="flex-shrink-0"
            >
              <Button
                  className="relative overflow-hidden bg-white hover:bg-white/95 text-[#1B365D] font-montserrat text-[13px] px-8 py-6 tracking-[0.1em] font-semibold uppercase transition-all duration-300 group shadow-lg shadow-black/5"
                >
                  <span className="relative z-10">Zatražite Ponudu</span>
                  <motion.div 
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "100%", opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 1.2,
                      delay: 2.6,
                      ease: [0.165, 0.84, 0.44, 1],
                      times: [0, 0.2, 0.8, 1]
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-[#C5A572]/0 via-[#C5A572]/20 to-[#C5A572]/0"
                  />
              </Button>
            </motion.div>
          </div>
          </motion.div>

        {/* Main Content Wrapper */}
          <div className="flex-1 flex items-center -mt-16">
            <div className="container mx-auto px-8">
              <div className="max-w-[900px]">
                <motion.div
                  variants={{
                    animate: {
                      transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.8
                      }
                    }
                  }}
                  initial="initial"
                  animate="animate"
                  className="relative"
                >
                  <motion.div
                    variants={{
                      animate: {
                        transition: {
                          staggerChildren: 0.12,
                          delayChildren: 0.3
                        }
                      }
                    }}
                    initial="initial"
                    animate="animate"
                    className="space-y-14"
                  >
                    {/* Modern Premium Heading */}
                    <motion.div 
                      variants={{
                        animate: {
                          transition: {
                            staggerChildren: 0.12,
                            delayChildren: 1
                          }
                        }
                      }}
                      className="relative"
                    >
                      {/* Subtle Background Effect */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.12, scale: 1 }}
                        transition={{ duration: 2, delay: 0.8 }}
                        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#C5A572] rounded-full blur-[180px]"
                      />
                      
                      {/* Main Text */}
                      <div className="relative space-y-6">
                        {/* Accent Line */}
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: 120, opacity: 1 }}
                          transition={{ duration: 1.6, delay: 1.2 }}
                          className="h-[3px] bg-gradient-to-r from-[#C5A572] to-transparent -mb-3"
                        />
                        
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <motion.div
                              variants={{
                                initial: { opacity: 0, y: 60 },
                                animate: { 
                                  opacity: 1, 
                                  y: 0,
                                  transition: {
                                    duration: 1.4,
                                    ease: [0.165, 0.84, 0.44, 1]
                                  }
                                }
                              }}
                              className="flex items-baseline overflow-visible"
                            >
                              <h1 className="font-montserrat text-[72px] text-white leading-[1.1] tracking-[-0.02em] font-light">
                                Vaš <span className="relative">
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.2, delay: 1 }}
                                    className="absolute -left-3 -top-3 w-14 h-14 bg-[#C5A572]/10 rounded-full blur-lg"
                                  />
                                  <span className="font-playfair font-bold text-[#C5A572] tracking-tight relative">Prvi</span>
                                </span> <span className="font-medium">Izbor</span>
                              </h1>
                            </motion.div>
                            
                            <motion.div
                              variants={{
                                initial: { opacity: 0, y: 60 },
                                animate: { 
                                  opacity: 1, 
                                  y: 0,
                                  transition: {
                                    duration: 1.4,
                                    ease: [0.165, 0.84, 0.44, 1]
                                  }
                                }
                              }}
                              className="flex items-baseline overflow-visible"
                            >
                              <h1 className="font-montserrat text-[72px] text-white leading-[1.1] tracking-[-0.02em] font-light">
                                za <span className="font-medium">Uspešno</span>
                  </h1>
                            </motion.div>
                            
                            <motion.div
                              variants={{
                                initial: { opacity: 0, y: 60 },
                                animate: { 
                                  opacity: 1, 
                                  y: 0,
                                  transition: {
                                    duration: 1.4,
                                    ease: [0.165, 0.84, 0.44, 1]
                                  }
                                }
                              }}
                              className="flex items-baseline overflow-visible"
                            >
                              <h1 className="font-montserrat text-[72px] text-white/95 leading-[1.1] tracking-[-0.02em] font-medium">
                                Ugostiteljstvo
                              </h1>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Subheading */}
                      <motion.p
                        variants={{
                          initial: { opacity: 0, y: 40 },
                          animate: { 
                            opacity: 1, 
                            y: 0,
                            transition: {
                              duration: 1.4,
                              ease: [0.165, 0.84, 0.44, 1]
                            }
                          }
                        }}
                        className="font-montserrat text-xl text-white/85 max-w-xl leading-[1.6] mt-8 tracking-wide"
                      >
                        Stvaramo jedinstvena rešenja koja prate
                        <br />
                        potrebe vašeg poslovanja i vaših gostiju
                      </motion.p>
                    </motion.div>

                    {/* Services Section */}
                    <motion.div
                      variants={{
                        animate: {
                          transition: {
                            staggerChildren: 0.12,
                            delayChildren: 1.4
                          }
                        }
                      }}
                      className="relative"
                    >
                      <div className="grid grid-cols-3 gap-6 max-w-[700px]">
                        {[
                          {
                            icon: Utensils,
                            title: "Distribucija",
                            description: "Vrhunske namirnice i proizvodi za vašu ugostiteljsku ponudu"
                          },
                          {
                            icon: Lightbulb,
                            title: "Idejna Rešenja",
                            description: "Strateško planiranje i razvoj inovativnih poslovnih ideja"
                        },
                        {
                          icon: LineChart,
                            title: "Rast & Razvoj",
                            description: "Praćenje trendova i kreiranje najbolje ponude za vaše klijente"
                        }
                      ].map((feature, i) => (
                        <motion.div
                          key={feature.title}
                            variants={{
                              initial: { opacity: 0, y: 40 },
                              animate: { 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                  duration: 1.2,
                                  ease: [0.165, 0.84, 0.44, 1]
                                }
                              }
                            }}
                            className="group relative"
                          >
                            <div className="relative flex flex-col items-start w-full">
                              {/* Icon Container */}
                              <div className="relative mb-3">
                                <div className="absolute inset-0 bg-[#C5A572]/10 rounded-full blur-xl transform scale-0 group-hover:scale-150 transition-transform duration-500" />
                                <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover:border-[#C5A572]/30 transition-all duration-300 group-hover:bg-white/[0.04]">
                                  <feature.icon className="w-6 h-6 text-[#C5A572] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                          </div>

                              {/* Title and Description */}
                              <div className="space-y-2.5">
                                <h3 className="font-montserrat text-[15px] font-medium text-white/95 tracking-wide group-hover:text-[#C5A572] transition-colors duration-300">
                              {feature.title}
                            </h3>
                                <p className="font-montserrat text-[13px] text-white/70 tracking-wide leading-relaxed pr-4">
                              {feature.description}
                            </p>
                              </div>

                              {/* Enhanced Premium Line Indicator */}
                              <div className="absolute -bottom-3 left-0 w-16 h-[2px] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#C5A572] via-[#C5A572]/80 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
                              </div>
                          </div>
                        </motion.div>
                      ))}
                      </div>
                </motion.div>

                    {/* Bottom CTA */}
                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        animate: { 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            duration: 1.4, 
                            delay: 1.8,
                            ease: [0.165, 0.84, 0.44, 1]
                          }
                        }
                      }}
                      className="mt-16 space-y-10"
                    >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 1.8, ease: [0.165, 0.84, 0.44, 1] }}
                  >
                    <Button
                          className="relative overflow-hidden bg-[#C5A572] hover:bg-[#C5A572]/90 text-white font-montserrat px-10 py-7 text-base uppercase flex items-center gap-3 group shadow-lg shadow-black/5"
                    >
                          <span className="relative z-10">Saznajte Više</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}