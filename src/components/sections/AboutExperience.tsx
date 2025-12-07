'use client'

import Image from 'next/image'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import { Package, Calendar, Users, Truck, ShieldCheck, Handshake, FileText, Target, Clock, TrendingUp, Layers, Sun } from 'lucide-react'
import SectionDivider from '../SectionDivider'

const stats = [
  { icon: Package, label: 'Proizvoda', value: 150, suffix: '+' },
  { icon: ShieldCheck, label: 'Brendova u ponudi', value: 20, suffix: '+' },
  { icon: Calendar, label: 'Godina iskustva', value: 15, suffix: '+' },
  { icon: Handshake, label: 'Poslovnih partnera', value: 100, suffix: '+' },
]

const AnimatedStat = ({ value, suffix }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix ?? ''}`)

  return (
    <motion.span
      className="text-4xl font-sans font-bold text-midnight-slate"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => {
        animate(count, value, { duration: 4, ease: "easeOut" })
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {rounded}
    </motion.span>
  )
}

const valueProps = [
  {
    icon: ShieldCheck,
    title: 'Kvalitet Bez Kompromisa',
    description: 'Vaši gosti očekuju izvrsnost svaki put. Zato biramo samo brendove koji garantuju isti, vrhunski ukus u svakom pakovanju, čuvajući reputaciju koju ste godinama gradili.',
  },
  {
    icon: Clock,
    title: 'Tačnost i Pouzdanost',
    description: 'Znamo da je kašnjenje robe stres koji vam ne treba. Naš tim funkcioniše kao sat – roba stiže tačno kada je dogovoreno, kako bi vaša kuhinja radila bez zastoja.',
  },
  {
    icon: FileText,
    title: 'Podrška pri Izradi Menija',
    description: 'Treba vam osveženje ponude? Tu smo da zajedno kreiramo meni koji je atraktivan gostima, a isplativ vama. Pomažemo vam da odaberete idealne namirnice za svako jelo.',
  },
  {
    icon: Target,
    title: 'Lični Pristup',
    description: 'Svaki restoran ima svoju dušu i specifičnu publiku. Ne nudimo vam katalog, već rešenja. Slušamo vaše izazove i prilagođavamo našu ponudu vašem konceptu rada.',
  },
  {
    icon: Layers,
    title: 'Fleksibilnost Zaliha',
    description: 'Nemate magacin za velike zalihe? Nema problema. Prilagođavamo se vašem prostoru i dinamici, isporučujući onoliko robe koliko vam je zaista potrebno, baš onda kada vam treba.',
  },
  {
    icon: TrendingUp,
    title: 'Kvalitet koji se Isplati',
    description: 'Premium proizvod ne mora da ugrozi vašu zaradu. Kroz direktnu saradnju sa proizvođačima obezbeđujemo cene koje vam omogućavaju da servirate vrhunski kvalitet uz zdravu maržu.',
  },
]

const milestones = [
  { year: '2010', title: 'Osnivanje', description: 'Startovali smo kao specijalizovani dobavljač za boutique hotele.' },
  { year: '2014', title: 'Proširenje', description: 'Otvaranje centralnog magacina i uvođenje hladnog lanca.' },
  { year: '2018', title: 'Portfolio 200+', description: 'Uvezujemo međunarodne brendove i lokalne proizvođače.' },
  { year: '2025', title: 'Budućnost', description: 'Digitalizacija i novi premium partneri.' },
]

export default function AboutExperience() {
  return (
    <section
      id="o-nama"
            className="relative overflow-hidden py-32 min-h-screen flex items-center bg-transparent"
    >
            {/* Seamless bleed to neighbors */}
            <div className="absolute inset-x-0 -top-20 h-48 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/85 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 -bottom-20 h-48 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/85 to-transparent pointer-events-none" />

      {/* --- Golden Glow Ambient Layers --- */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-champagne-gold/10 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-champagne-gold/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-30 mix-blend-overlay pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            <div>
              <p className="text-warm-gold font-body text-xs tracking-[0.4em] uppercase mb-4 font-bold">
                O NAMA
              </p>
              <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-midnight-slate leading-[1.15] mb-6">
                Vaš pouzdan partner <br className="hidden md:block" />
                <span className="text-midnight-slate italic">u HoReCa sektoru</span>
              </h2>
              <p className="text-gray-800 font-montserrat leading-relaxed text-xl">
                Nakon dve decenije neprocenjivog iskustva i posvećenosti, konstantnim usavršavanjem u HoReCa sektoru izgradili smo dugoročne odnose sa našim klijentima zasnovane na poverenju i razumevanju.
              </p>
              <p className="text-charcoal/70 font-montserrat leading-relaxed text-lg mt-4">
                U dinamičnom svetu ugostiteljstva uspeh se meri kvalitetom usluge, a pre svega zadovoljstvom gostiju. Zato, naš asortiman je pažljivo biran kako bi zadovoljio visoke standarde, kao i kvalitet svake isporuke.
              </p>
              <p className="text-charcoal/70 font-montserrat leading-relaxed text-lg mt-4">
                Odabrali smo da se naš poslovni model zasniva na personalizovanom pristupu i partnerskom odnosu. Nismo samo dobavljači – mi smo vaš tim koji razume izazove sa kojima se suočavate svakodnevno.
              </p>
            </div>

            <SectionDivider className="mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 p-6 shadow-[0_8px_30px_rgba(201,168,100,0.05)] hover:shadow-[0_8px_30px_rgba(201,168,100,0.15)] transition-shadow duration-500"
                >
                  <stat.icon className="w-6 h-6 text-champagne-gold mb-3 opacity-100" />
                  <AnimatedStat value={stat.value} suffix={stat.suffix} />
                  <p className="text-charcoal/60 text-xs font-montserrat uppercase tracking-wider mt-1 font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-first lg:order-last mt-12 lg:mt-8"
          >
            {/* Clean premium image container */}
            <div className="relative px-4 lg:px-0 max-w-[490px] mx-auto">
              <div className="relative">
                {/* Restored gold offset frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#E3C16F] rounded-2xl z-0 pointer-events-none" />

                {/* Clean image with soft shadow */}
                <div className="relative rounded-[16px] overflow-hidden shadow-md h-[400px] aspect-[4/5] md:h-auto md:aspect-auto">
                  <Image
                    src="/images/about/onama.jpeg"
                    alt="Prima Venta Owner"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Caption card */}
                <div className="absolute bottom-4 left-4 right-4 md:-bottom-8 md:-left-12 md:right-auto md:w-80 bg-white rounded-2xl shadow-2xl border border-white/80 p-4 md:p-6 z-20">
                  <p className="font-playfair italic text-[#0b162a] leading-relaxed text-xs md:text-sm">
                    "Najbolja rešenja nastaju kada slušamo vaše izazove i učimo iz vaših potreba."
                  </p>
                  <p className="font-montserrat text-[10px] md:text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold mt-2 md:mt-3">
                    Prima Venta Tim
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 relative z-10"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-sans font-bold text-midnight-slate mb-4">Više od dobavljača</h3>
            <SectionDivider />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, i) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: 'easeOut' }}
                className="group relative p-9 rounded-[32px] bg-white/60 backdrop-blur-md border border-transparent text-center flex flex-col items-center transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:border-[#E3C16F]"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-[#fcfcfc] shadow-md border border-white/50 flex items-center justify-center text-champagne-gold mb-6 transition-transform duration-500 ease-out group-hover:scale-110">
                  <prop.icon size={28} />
                </div>
                <h4 className="font-sans font-bold text-xl text-midnight-slate mb-3">{prop.title}</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed text-center">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div >
    </section >
  )
}
