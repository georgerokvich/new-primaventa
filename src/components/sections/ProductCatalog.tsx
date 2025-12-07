'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Download, Package, ArrowRight, PlusCircle, ChevronUp } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { WheelEvent } from 'react'
import { allProducts, productCategories } from '@/data/products'
import { generateProductCatalogPdf } from '@/lib/pdf-generator'
const brands = [
  'Moguntia Food Group', 'Helcom', 'Anpek', 'Biser', 'Marco', 'Gurme',
  'Zanetti', 'Eko Fil', 'Trevalli', 'BMI', 'Hofmeister', 'Mlekovita',
  'PMF', 'Sipral', 'Pucci', 'Swisslion', 'Il Capitano',
  'Euro Cas', 'Dijamant', 'Paladin', 'Celjske Mesnine',
  'Barilla', 'Yuhor', 'Vrelo Produkt', 'Pekara Pons', 'Riscossa',
  'Speise Zeit', 'Mlekara Podgorac', 'Snow Fox', 'Maz', 'Vrhovi Zlatibora'
]

const brandAssets: Record<string, { src: string; alt: string }> = {
  // Keeping existing asset mapping
  'Moguntia Food Group': { src: '/images/brands/moguntia-food-group-v2.png', alt: 'Moguntia Food Group' },
  Helcom: { src: '/images/brands/helcom-v2.png', alt: 'Helcom' },
  Anpek: { src: '/images/brands/anpek-v2.png', alt: 'Anpek' },
  Lurpak: { src: '/images/brands/lurpak-v2.png', alt: 'Lurpak' },
  Biser: { src: '/images/brands/biser-v2.png', alt: 'Biser' },
  Marco: { src: '/images/brands/marco-v2.png', alt: 'Marco' },
  Gurme: { src: '/images/brands/gurme-v2.png', alt: 'Gurme' },
  Zanetti: { src: '/images/brands/zanetti-v2.png', alt: 'Zanetti' },
  'Eko Fil': { src: '/images/brands/eko-fil-v2.png', alt: 'Eko Fil' },
  Trevalli: { src: '/images/brands/trevalli-v2.png', alt: 'Trevalli' },
  BMI: { src: '/images/brands/bmi-v2.png', alt: 'BMI' },
  Hofmeister: { src: '/images/brands/hofmeister-v3.png', alt: 'Hofmeister' },
  Mlekovita: { src: '/images/brands/mlekovita-v2.png', alt: 'Mlekovita' },
  PMF: { src: '/images/brands/pmf-v2.png', alt: 'PMF' },
  Sipral: { src: '/images/brands/sipral-v2.png', alt: 'Sipral' },
  Pucci: { src: '/images/brands/pucci-v3.png', alt: 'Pucci' },
  'Swisslion': { src: '/images/brands/swis-lion-v2.png', alt: 'Swisslion' },
  'Il Capitano': { src: '/images/brands/il-capitano-v2.png', alt: 'Il Capitano' },
  'Euro Cas': { src: '/images/brands/euro-cas-v2.png', alt: 'Euro Cas' },
  Dijamant: { src: '/images/brands/dijamant-v2.png', alt: 'Dijamant' },
  Paladin: { src: '/images/brands/paladin-v2.png', alt: 'Paladin' },
  'Celjske Mesnine': { src: '/images/brands/celjske-mesnine-v2.jpg', alt: 'Celjske Mesnine' },
  Barilla: { src: '/images/brands/barilla-v3.png', alt: 'Barilla' },
  Yuhor: { src: '/images/brands/yuhor-v3.png', alt: 'Yuhor' },
  'Vrelo Produkt': { src: '/images/brands/vrelo-produkt-v3.png', alt: 'Vrelo Produkt' },
  'Pekara Pons': { src: '/images/brands/pekara-pons-v3.png', alt: 'Pekara Pons' },
  Riscossa: { src: '/images/brands/riscossa-v3.png', alt: 'Riscossa' },
  'Speise Zeit': { src: '/images/brands/speise-zeit-v3.png', alt: 'Speise Zeit' },
  'Mlekara Podgorac': { src: '/images/brands/mlekara-podgorac-v3.png', alt: 'Mlekara Podgorac' },
  'Snow Fox': { src: '/images/brands/snow-fox-v3.png', alt: 'Snow Fox' },
  Maz: { src: '/images/brands/maz-v3.png', alt: 'Maz' },
  'Vrhovi Zlatibora': { src: '/images/brands/vrhovi-zlatibora-v3.png', alt: 'Vrhovi Zlatibora' },
}

export default function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showAllCategories, setShowAllCategories] = useState(false)
  const categoryMap = useMemo(
    () => new Map(productCategories.map((cat) => [cat.id, cat.name])),
    []
  )

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    if (selectedCategories.length) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category))
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter((product) => {
        return (
          product.name.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query) ||
          product.sku?.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        )
      })
    }
    return filtered
  }, [selectedCategories, searchQuery])

  const handleDownloadCatalog = () => generateProductCatalogPdf()
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((c) => c !== categoryId) : [...prev, categoryId]
    )
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setSelectedCategories([])
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSearchQuery('')
  }

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.025, delayChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.18, ease: [0.25, 0.8, 0.25, 1] as const } },
    exit: { opacity: 0, y: 8, transition: { duration: 0.12, ease: [0.4, 0, 0.2, 1] as const } },
  }

  const handleListWheel = (e: WheelEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    const atTop = target.scrollTop === 0 && e.deltaY < 0
    const atBottom = target.scrollHeight - target.clientHeight - target.scrollTop <= 1 && e.deltaY > 0
    if (atTop || atBottom) {
      e.preventDefault()
    }
    e.stopPropagation()
  }

  const visibleCategories = showAllCategories ? productCategories : productCategories.slice(0, 8)
  const remainingCount = Math.max(productCategories.length - visibleCategories.length, 0)

  return (
    <section
      id="asortiman"
      className="relative overflow-hidden pt-16 pb-28 bg-transparent"
    >
            {/* Seamless bleed to neighbors */}
            <div className="absolute inset-x-0 -top-18 h-48 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/85 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 -bottom-18 h-48 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/85 to-transparent pointer-events-none" />

      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="relative container mx-auto px-6 space-y-16">

        {/* Brand Scroller - Clean, No Container Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12"
        >
          {/* Enhanced Premium Header */}
          <div className="text-center mb-16 relative z-10">
            <h3 className="font-sans font-bold text-4xl md:text-6xl text-midnight-slate mb-8">
              Brendovi iza kojih stojimo
            </h3>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-champagne-gold to-transparent mx-auto mb-8" />
            
            <p className="text-slate-600 font-body text-lg max-w-2xl mx-auto">
              Kvalitet ne trpi kompromise. Zato biramo isključivo partnere koji garantuju vrhunski standard za vašu kuhinju.
            </p>

            {/* Subtle Glow Behind Text for Visibility */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-white/40 blur-[80px] -z-10 rounded-full pointer-events-none"></div>
          </div>

          <div
            className="relative overflow-hidden py-8"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
            }}
          >
            <div className="carousel-track flex gap-12">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand}-${index}`}
                  className="flex-shrink-0 group"
                >
                  {/* Premium Card */}
                  <div className="relative">
                    {/* Card Container */}
                    <div className="w-44 h-44 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-center p-6 group-hover:border-champagne-gold/30 group-hover:scale-105">
                      {/* Brand Logo/Initial */}
                      {brandAssets[brand] ? (
                        <Image
                          src={brandAssets[brand].src}
                          alt={brandAssets[brand].alt}
                          width={120}
                          height={120}
                          className="object-contain transition-all duration-500"
                        />
                      ) : (
                        <span className="text-5xl font-sans font-bold text-slate-200 group-hover:text-champagne-gold transition-colors duration-500">
                          {brand.charAt(0)}
                        </span>
                      )}
                    </div>
                    
                    {/* Brand Name - Below Card */}
                    <p className="mt-4 text-center text-[11px] font-sans font-semibold text-slate-500 uppercase tracking-[0.12em] whitespace-pre-line leading-tight group-hover:text-champagne-gold transition-colors duration-300">
                      {brand === 'Moguntia Food Group' ? 'Moguntia\nFood Group' : brand}
                    </p>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-champagne-gold/0 group-hover:bg-champagne-gold/5 rounded-2xl blur-xl transition-all duration-500 -z-10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Product Catalog Section - single column */}
        <div className="relative max-w-4xl mx-auto w-full space-y-8">
          {/* PDF Action Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-[#0B162A] text-white p-6 md:p-8 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
            <div className="flex flex-col items-center justify-center text-center gap-4 p-2">
              <h3 className="text-2xl md:text-3xl font-serif leading-tight">
                Želite kompletnu listu proizvoda?
              </h3>
              <p className="text-sm text-white/70 md:text-base max-w-2xl">
                Preuzmite detaljan PDF katalog sa svim artiklima.
              </p>
              <div className="relative">
                <div className="absolute inset-0 blur-3xl bg-[#E3C16F]/40 scale-125" />
                <button
                  onClick={handleDownloadCatalog}
                  className="relative inline-flex items-center gap-2 rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold bg-gradient-to-r from-[#E3C16F] via-[#F2D58A] to-[#E3C16F] text-[#0B162A] shadow-[0_15px_40px_rgba(227,193,111,0.35)] hover:shadow-[0_18px_45px_rgba(227,193,111,0.45)] transition-all"
                >
                  <Download size={18} />
                  PREUZMITE PDF KATALOG
                </button>
              </div>
            </div>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex flex-1 items-center gap-3 h-14 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(15,23,42,0.05)] px-4 focus-within:ring-2 focus-within:ring-[#E3C16F]/60 transition-all">
                <Search size={20} className="text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pretražite po nazivu, šifri ili kategoriji..."
                  className="w-full h-full bg-transparent border-none outline-none text-lg text-[#0B162A] placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="p-2 rounded-full text-slate-500 hover:bg-slate-100"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              {selectedCategories.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-slate-600 underline underline-offset-2 decoration-slate-300 hover:decoration-slate-500"
                >
                  Resetuj filtere
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 justify-center transition-all duration-300">
              <button
                onClick={() => setSelectedCategories([])}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] transition-colors duration-200 border border-transparent ${
                  selectedCategories.length === 0
                    ? 'bg-[#0B162A] text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Sve
              </button>
              {visibleCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] transition-colors duration-200 border border-transparent ${
                    selectedCategories.includes(cat.id)
                      ? 'bg-[#0B162A] text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
              {(remainingCount > 0 || showAllCategories) && (
                <button
                  onClick={() => setShowAllCategories((prev) => !prev)}
                  className="flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-[#E3C16F] hover:text-[#0B162A] transition-colors ml-2"
                >
                  <span>
                    {showAllCategories
                      ? 'PRIKAŽI MANJE'
                      : `SVE KATEGORIJE${remainingCount ? ` (+${remainingCount})` : ''}`}
                  </span>
                  {showAllCategories ? <ChevronUp size={14} /> : <PlusCircle size={14} />}
                </button>
              )}
            </div>

          </motion.div>

          {/* Product List */}
          <motion.div className="relative border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden">
            <div className="sticky top-0 z-10 bg-gray-50 border-b px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500 grid grid-cols-[1.4fr_1fr_auto] gap-2">
              <span>Naziv proizvoda</span>
              <span>Kategorija</span>
              <span className="text-right">Jedinica</span>
            </div>

            <motion.div
              className="h-[600px] overflow-y-auto overscroll-contain touch-pan-y p-2 space-y-2 scrollbar-thin scrollbar-thumb-[#E3C16F]/60 scrollbar-track-transparent"
              onWheel={handleListWheel}
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence initial={false}>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const categoryName = categoryMap.get(product.category) ?? product.category
                    return (
                      <motion.div
                        key={product.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="group relative w-full bg-white p-4 md:p-5 rounded-xl border border-gray-100 shadow-sm grid grid-cols-[1.4fr_1fr_auto] items-center gap-4 hover:border-[#E3C16F] hover:shadow-md hover:z-10 transition-all duration-200"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0B162A] flex items-center justify-center shrink-0">
                            <Package size={22} />
                          </div>
                          <div className="min-w-0 space-y-1">
                            <p className="text-[#0B162A] font-semibold truncate">
                              {product.name}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <span className="uppercase tracking-[0.08em]">{product.sku || 'N/A'}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-[10px] font-bold tracking-wider text-gray-500 bg-gray-50 px-2 py-1 rounded truncate w-fit">
                          {categoryName}
                        </div>

                        <div className="flex items-center justify-end gap-3">
                          <span className="text-xs px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-[#0B162A]">
                            {product.unit}
                          </span>
                          <ArrowRight
                            size={16}
                            className="text-[#E3C16F] transition-transform group-hover:translate-x-1"
                          />
                        </div>
                      </motion.div>
                    )
                  })
                ) : (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center space-y-3"
                  >
                    <p className="text-lg font-semibold text-[#0B162A]">Nema rezultata</p>
                    <p className="text-sm text-slate-500">Pokušajte drugi upit ili resetujte filtere.</p>
                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-[#0B162A] hover:border-[#E3C16F] hover:text-[#0B162A]"
                    >
                      <X size={14} />
                      Poništi filtere
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
