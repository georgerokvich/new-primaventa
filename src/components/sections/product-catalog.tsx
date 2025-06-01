'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { productCategories } from '@/data/product-categories'
import { allProducts } from '@/data/sample-products'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
      
      return matchesCategory && matchesSubcategory && matchesSearch
    })
  }, [selectedCategory, selectedSubcategory, searchTerm])

  const currentCategory = productCategories.find(cat => cat.id === selectedCategory)

  return (
    <div className="relative min-h-screen w-full bg-[#1B365D]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/patterns/noise.png')] mix-blend-overlay" />
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 pt-16 pb-12"
      >
        <div className="container mx-auto px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
                Naš <span className="text-[#C5A572]">Asortiman</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C5A572] to-transparent mx-auto" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-montserrat text-lg text-white/90 max-w-2xl mx-auto"
            >
              Kompletna ponuda vrhunskih namirnica za uspešno ugostiteljstvo
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-8">
          {/* Search and Filter Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="max-w-3xl mx-auto">
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C5A572] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Pretražite proizvode..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#C5A572] transition-colors"
                />
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
              <motion.button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedSubcategory('all')
                }}
                className={`px-4 py-3 rounded-lg font-montserrat text-sm transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-[#C5A572] text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sve Kategorije
              </motion.button>
              
              {productCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setSelectedSubcategory('all')
                  }}
                  className={`px-4 py-3 rounded-lg font-montserrat text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-[#C5A572] text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.05) }}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="truncate">{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Subcategory Filter */}
          <AnimatePresence>
            {currentCategory?.subcategories && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
              >
                <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
                  <motion.button
                    onClick={() => setSelectedSubcategory('all')}
                    className={`px-3 py-2 rounded-md font-montserrat text-sm transition-all duration-300 ${
                      selectedSubcategory === 'all'
                        ? 'bg-white/20 text-white'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Sve Podkategorije
                  </motion.button>
                  
                  {currentCategory.subcategories.map((subcategory) => (
                    <motion.button
                      key={subcategory}
                      onClick={() => setSelectedSubcategory(subcategory)}
                      className={`px-3 py-2 rounded-md font-montserrat text-sm transition-all duration-300 ${
                        selectedSubcategory === subcategory
                          ? 'bg-white/20 text-white'
                          : 'bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {subcategory}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="wait">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  {/* Product Image Placeholder */}
                  <div className="relative h-32 bg-gradient-to-br from-[#C5A572]/20 to-[#C5A572]/5 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                        <span className="text-2xl">
                          {productCategories.find(cat => cat.id === product.category)?.icon || '📦'}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-[#C5A572]/80 text-white text-xs font-montserrat rounded-md">
                        {product.unit}
                      </span>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-4">
                    <h3 className="font-montserrat text-base font-semibold text-white mb-2 group-hover:text-[#C5A572] transition-colors overflow-hidden">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="font-montserrat text-sm text-white/70 mb-3 overflow-hidden h-10">
                        {product.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      {product.subcategory && (
                        <span className="font-montserrat text-xs text-white/50 truncate">
                          {product.subcategory}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="h-1 bg-gradient-to-r from-[#C5A572]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="font-montserrat text-xl text-white/60">
                Nema proizvoda koji odgovaraju vašoj pretragama
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
