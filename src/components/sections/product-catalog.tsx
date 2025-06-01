'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { productCategories } from '@/data/product-categories'
import { allProducts } from '@/data/sample-products'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
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
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.165, 0.84, 0.44, 1] }}
        className="relative z-10 pt-24 pb-16"
      >
        <div className="container mx-auto px-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mb-6"
            >
              <h1 className="font-playfair text-6xl font-bold text-white mb-4">
                Naš <span className="text-[#C5A572]">Asortiman</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-[#C5A572] to-transparent mx-auto" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-montserrat text-xl text-white/90 max-w-2xl mx-auto"
            >
              Kompletna ponuda vrhunskih namirnica za uspešno ugostiteljstvo
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-8">
          {/* Search and Filter Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="max-w-4xl mx-auto">
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
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedSubcategory('all')
                }}
                className={`px-6 py-3 rounded-lg font-montserrat transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-[#C5A572] text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                  className={`px-6 py-3 rounded-lg font-montserrat transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-[#C5A572] text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                >
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
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
                className="mb-12"
              >
                <div className="flex flex-wrap gap-3 justify-center">
                  <motion.button
                    onClick={() => setSelectedSubcategory('all')}
                    className={`px-4 py-2 rounded-md font-montserrat text-sm transition-all duration-300 ${
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
                      className={`px-4 py-2 rounded-md font-montserrat text-sm transition-all duration-300 ${
                        selectedSubcategory === subcategory
                          ? 'bg-white/20 text-white'
                          : 'bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4">
                    <h3 className="font-montserrat text-lg font-semibold text-white mb-2 group-hover:text-[#C5A572] transition-colors">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="font-montserrat text-sm text-white/70 mb-2">
                        {product.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="font-montserrat text-xs text-[#C5A572] uppercase tracking-wider">
                        {product.unit}
                      </span>
                      {product.subcategory && (
                        <span className="font-montserrat text-xs text-white/50">
                          {product.subcategory}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="h-1 bg-gradient-to-r from-[#C5A572]/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
