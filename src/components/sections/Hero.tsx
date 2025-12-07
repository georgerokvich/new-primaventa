'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, ChevronDown, Utensils, ChefHat, ShieldCheck, Handshake } from 'lucide-react'
import { fadeIn, heroHeadline, heroLine, heroParagraph, slideUp, staggerContainer } from '@/lib/animations'
import { generateProductCatalogPdf } from '@/lib/pdf-generator'
import { useSmoothScroll } from '@/components/providers/SmoothScrollProvider'

const services = [
  {
    icon: Utensils,
    title: 'Sve na jednom mestu',
    description: 'Od osnovnih namirnica do premium artikala – kompletno snabdevanje u jednoj isporuci.',
  },
  {
    icon: ChefHat,
    title: 'Gastronomsko iskustvo',
    description: 'Saveti naših stručnjaka za odabir namirnica koje prave razliku na tanjiru.',
  },
  {
    icon: ShieldCheck,
    title: 'Kontinuitet kvaliteta',
    description: 'Garantujemo da je proizvod koji dobijete danas isti onaj koji ćete dobiti i za godinu dana.',
  },
  {
    icon: Handshake,
    title: 'Dugoročno partnerstvo',
    description: 'Vaš rast je naš cilj. Planiramo zalihe unapred kako vi ne biste morali da brinete.',
  },
]

export default function Hero() {
  const { scrollToSection } = useSmoothScroll()

  const handleDownload = () => {
    generateProductCatalogPdf()
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-midnight-slate text-white">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/hero-bg.jpg"
            alt="Profesionalna kuhinja"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_30%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/90 via-[#1E293B]/70 to-[#334155]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/60 to-[#0F172A]/95" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-champagne-gold blur-[160px]"
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-120px' }}
          className="flex w-full max-w-6xl flex-col items-center space-y-8"
        >
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center gap-4 text-xs font-montserrat uppercase tracking-[0.4em] text-white"
          >
            <Image src="/logo-mark.svg" alt="Prima Venta" width={160} height={64} priority />
            <span className="font-body tracking-[0.35em] normal-case text-sm">
              Premium&nbsp;
              <span className="font-body tracking-[0.4em] normal-case" style={{ letterSpacing: '0.4em' }}>
                HoReCa
              </span>
              &nbsp;Partner
            </span>
          </motion.div>

          <motion.div variants={heroHeadline} initial="initial" whileInView="animate" className="space-y-6">
            <div className="space-y-0.5">
              <motion.h1
                variants={heroLine}
                className="font-sans font-bold text-4xl leading-tight text-white sm:text-5xl lg:text-7xl"
                style={{ textShadow: '0 10px 25px rgba(0,0,0,0.65)' }}
              >
                Vaš{' '}
                <motion.span
                  variants={heroLine}
                  className="relative font-bold tracking-[0.02em]"
                  style={{
                    textShadow: '0 12px 28px rgba(0,0,0,0.45), 0 0 4px rgba(0,0,0,0.25)',
                    WebkitTextStroke: '0.25px rgba(255,255,255,0.1)',
                  }}
                  initial={{ color: '#ffffff' }}
                  whileInView={{ color: '#E0C568' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.85, ease: [0.165, 0.84, 0.44, 1] }}
                >
                  <span className="relative inline-flex">
                    {/* Subtle glow pulse */}
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: [0, 0.4, 0] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                      className="absolute -inset-[3px] -z-10 rounded-[4px] bg-champagne-gold/20 blur-[8px]"
                    />
                    <span className="absolute -inset-[2px] -z-10 rounded-[4px] border border-champagne-gold/30 blur-[4px]" />
                    PRVI
                    {/* Underline */}
                    <motion.span
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.9, ease: [0.165, 0.84, 0.44, 1] }}
                      className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-[110%] -translate-x-1/2 origin-left rounded-full bg-gradient-to-r from-transparent via-champagne-gold to-transparent shadow-[0_0_12px_rgba(224,197,104,0.55)]"
                    />
                  </span>
                </motion.span>{' '}
                izbor za
              </motion.h1>
              <motion.h2
                variants={heroLine}
                className="font-sans font-semibold text-3xl leading-tight text-slate-200 sm:text-4xl lg:text-5xl"
                style={{ textShadow: '0 10px 25px rgba(0,0,0,0.65)' }}
              >
                uspešno ugostiteljstvo.
              </motion.h2>
            </div>
            <motion.p
              variants={heroParagraph}
              className="max-w-3xl font-body text-base text-slate-300 sm:text-lg leading-relaxed"
              style={{ textShadow: '0 10px 30px rgba(0,0,0,0.7)' }}
            >
              Nakon dve decenije iskustva u HoReCa sektoru, stvaramo jedinstvena rešenja zasnovana na poverenju i razumevanju. Od nabavke i logistike do strateške podrške.
            </motion.p>
            <motion.p
              variants={heroParagraph}
              className="mt-4 font-sans text-lg text-white sm:text-xl font-semibold tracking-wide"
              style={{ textShadow: '0 10px 30px rgba(0,0,0,0.7)' }}
            >
              Vaš uspeh je naš uspeh.
            </motion.p>
          </motion.div>

          <motion.div variants={slideUp} className="flex justify-center">
            <button
              onClick={() => scrollToSection('o-nama')}
              className="group relative flex w-full max-w-xs items-center justify-center gap-3 overflow-hidden rounded-2xl bg-champagne-gold px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-midnight-slate shadow-[0_8px_30px_rgba(201,169,97,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(201,169,97,0.5)] border border-champagne-gold/20"
            >
              <span className="relative z-10">SAZNAJTE VIŠE</span>
              <ChevronDown className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </motion.div>

          <motion.div variants={slideUp} className="w-full max-w-6xl text-white mt-2">
            <p className="font-montserrat text-xs uppercase tracking-[0.5em] text-white/60 mb-5 text-center">
              Šta dobijate
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/20 bg-white/10/80 p-6 text-center text-white/85 shadow-[0_18px_45px_rgba(5,7,10,0.2)] backdrop-blur-[3px] transition-all duration-500 hover:border-champagne-gold/60 hover:bg-white/15 hover:shadow-[0_28px_65px_rgba(5,7,10,0.32)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-champagne-gold transition-all duration-500 group-hover:bg-white/25">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-montserrat text-sm font-semibold text-white">{service.title}</p>
                    <p className="text-sm text-white/70 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

